import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { SocketService } from 'src/app/socket.service';
import { AngularFireAuth } from '@angular/fire/auth'
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  socket;

  fatherPostName;
  fatherPostContent;
  fatherPostImage;

  currentUserImage;
  currentUserName;

  newCommentContent;

  comments;


  constructor(private route: ActivatedRoute, private auth: AngularFireAuth, private socketService: SocketService) {
    this.socket = this.socketService.socket
  }

  ngOnInit(): void {
    var postId = this.route.snapshot.params["id"]
    this.socket.emit('getPost', { id: postId }, data => {
      if (data) {
        console.log(data[0].content);
        this.fatherPostName = data[0].name;
        this.fatherPostContent = data[0].content;
        this.fatherPostImage = data[0].profileImage
      }
    })
    this.socket.emit('getAllComments', { father: postId }, data => {
      this.comments = data
      setTimeout(function () {
        window.scrollTo({
          top: document.body.scrollHeight, left: 0, behavior: 'smooth'
        });
      }, 100)
    })
    this.auth.onAuthStateChanged((user) => {
      if (user) {
        this.socket.emit('user', { userUid: user.uid }, data => {
          if (data.length != 0) {
            this.currentUserName = data[0].username;
            this.currentUserImage = data[0].profileImage
            console.log(data);
            
          } else {
            console.log("nothing");
          }
        })
      }

    })

  }

  addComment() {
    this.auth.onAuthStateChanged((user) => {
      if (user) {
        this.socket.emit('addComment', {
          ownerUid: user.uid,
          content: this.newCommentContent,
          ownerName: this.currentUserName,
          ownerImage: this.currentUserImage,
          fatherPost: this.route.snapshot.params["id"]
        }, comments => {
          this.comments = comments
          setTimeout(function () {
            window.scrollTo({
              top: document.body.scrollHeight, left: 0, behavior: 'smooth'
            });
          }, 100)
        })
      }
    })

  }

  getNewComments(e) {
    this.comments = e
  
  }
  
}