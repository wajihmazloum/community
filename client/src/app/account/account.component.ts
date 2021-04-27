import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { Router } from '@angular/router'
import { SocketService } from 'src/app/socket.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  socket;

  email = "";
  password = "";
  username = "";
  profileImage: string = '';

  constructor(private auth: AngularFireAuth, public router: Router,private socketService: SocketService) {
    this.socket = this.socketService.socket
  }
  ngOnInit(): void {

    this.auth.onAuthStateChanged((user) => {
      if (user) {
        this.socket.emit('user', { userUid: user.uid }, result => {
          // if (result.length != 0) {
            this.profileImage = result[0].profileImage
            this.username = result[0].username
            this.email = result[0].email
          // } else {
          //   console.log("nothing");
          // }
        })
      } else {
        this.router.navigate(['/account/logs'])
      }
    })


  }

  logout() {
    this.auth.onAuthStateChanged((user) => {
      if (user) {
        this.auth.signOut()
          .then(() => {
            this.router.navigate(['/'])
          })
          .catch((error) => {
            alert(error)
          })
      }else{
        console.log("no user");
      }
    })
  }

  reset() {
    this.auth.onAuthStateChanged((user) => {
      this.auth.sendPasswordResetEmail(user.email)
        .then(() => {
          alert('an email is sent to you')
        })
        .catch((error) => {
          alert(error)
        })
      // user.updatePassword()
    })
  }



}
