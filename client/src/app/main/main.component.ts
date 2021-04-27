import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { ActivatedRoute, Router } from '@angular/router';
import { SocketService } from 'src/app/socket.service'
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  socket;
  posts;

  username;
  content;
  uid;
  profileImage;

  constructor(private auth: AngularFireAuth, public router: Router, private socketService: SocketService, route: ActivatedRoute) {
    this.socket = this.socketService.socket
  }

  @Input() newData;



  ngOnInit(): void {
    this.auth.onAuthStateChanged((user) => {
      if (user) {
        (<HTMLLIElement>document.getElementById("user")).hidden = false;
        (<HTMLLIElement>document.getElementById("nouser")).hidden = true;
        this.socket.emit('user', { userUid: user.uid }, result => {
          if (result.length != 0) {
            this.profileImage = result[0].profileImage
            this.username = result[0].username
          } else {
            console.log("nothing");
          }
        })
      } else {
        (<HTMLLIElement>document.getElementById("user")).hidden = true;
        (<HTMLLIElement>document.getElementById("nouser")).hidden = false;
      }

    })

    
    this.socket.on('getAll', (data) => {
      if (data.length == 0) {
        alert("no posts yet")
      } else {
        this.posts = data;
        console.log(data);

        setTimeout(function () {
          window.scrollTo({
            top: document.body.scrollHeight, left: 0, behavior: 'smooth'
          });
        }, 100)
      }
    })


  }

  post() {
    this.auth.onAuthStateChanged((user) => {

      this.socket.emit("newPost", {
        ownerName: this.username,
        content: this.content,
        ownerUid: user.uid,
        profile: this.profileImage
      }, data => {
        if (data) {
          this.posts = data
          console.log(data);

          this.content = ""
          setTimeout(function () {
            window.scrollTo({
              top: document.body.scrollHeight, left: 0, behavior: 'smooth'
            });
          }, 100)
        }
      })
    })
  }



  getNewData(e) {
    alert(e)
    console.log(e);
    this.posts = e

  }

  nouser() {
    alert("no user, sign in first")
  }

}

