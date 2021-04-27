import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { QuestionComponent } from './question/question.component';


import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [MainComponent, QuestionComponent, PostComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule
  ]
})
export class MainModule { }
