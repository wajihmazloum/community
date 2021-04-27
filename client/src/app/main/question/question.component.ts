import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { SocketService } from 'src/app/socket.service';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Output() newData = new EventEmitter();
  @Output() newComments = new EventEmitter();
  socket;
  visibility;

  @Input() content = "";
  @Input() profileImage = "";
  @Input() name = "";
  @Input() id = "";
  @Input() owner = "";

  @Input() origin = '';
  constructor(private auth: AngularFireAuth,private socketService: SocketService) {
    this.socket = this.socketService.socket
  }

  ngOnInit(): void {
    
    

      // this.load()
    if (this.origin == "comment") {
      this.visibility = false
    }else{
      this.visibility = true
    }
    this.auth.onAuthStateChanged((user) => {
      if (user) {
        if (user.uid == this.owner) {
          (<HTMLLIElement>document.getElementById(this.id)).hidden = false
        } else {
          (<HTMLLIElement>document.getElementById(this.id)).hidden = true
        }
      } else {
        (<HTMLLIElement>document.getElementById(this.id)).hidden = true
      }
    })

  }

  delete(e) {
    this.auth.onAuthStateChanged((user) => {
      if (user) {
        if (user.uid == this.owner) {

          if (this.origin == "post") {

            this.socket.emit('deletePost', { id: e.target.id }, data => {
              if (data) {
                this.newData.emit(data)
              } else {
                console.log("aa");
              }
            })


          } else {
            this.socket.emit('deleteComment', { id: e.target.id }, data => {
              if (data) {
                this.newComments.emit(data)
              } else {
                console.log("aa");
              }
            })
          }

        }
      }
    })
  }



}
