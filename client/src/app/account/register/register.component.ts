import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { Router } from '@angular/router'
import { io } from 'socket.io-client'
import { SocketService } from 'src/app/socket.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  socket;

  email = "";
  password = "";
  username = "";
  profileImage: string = '';


  constructor(private auth: AngularFireAuth, public router: Router, private socketService: SocketService) {
    this.socket = socketService.socket
  }
  ngOnInit(): void {
    this.auth.onAuthStateChanged((user) => {
      if(user){
        this.router.navigate(['/account/profile'])

      }
    })
  }


  register() {
    this.auth.createUserWithEmailAndPassword(this.email, this.password)
      .then((user) => {
        if (this.profileImage == "") {
          this.profileImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/1200px-Unknown_person.jpg"
        }
        this.socket.emit('userProfile', {
          email: this.email,
          username: this.username,
          uid: user.user.uid,
          profileImage: this.profileImage
        })
      })
      .then(()=>{
        this.router.navigate(["/account/profile"])
      })
      .catch((error) => {
        alert(error)
      })
  }

  login() {
    this.auth.signInWithEmailAndPassword(this.email, this.password)
      .then(() => {
        this.router.navigate(["/"])
      })
      .catch((error) => {
        alert(error)
      })
  }





  handleInputChange(e) {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
    (<HTMLImageElement>document.getElementById('profileImage')).hidden = false
  }
  _handleReaderLoaded(e) {
    let reader = e.target;
    this.profileImage = reader.result;
  }

}
