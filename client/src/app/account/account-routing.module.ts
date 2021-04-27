import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountComponent } from './account.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'profile', component: AccountComponent },
  {path:'logs',component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
