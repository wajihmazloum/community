import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms' 

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [AccountComponent, RegisterComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule
  ]
})
export class AccountModule { }
