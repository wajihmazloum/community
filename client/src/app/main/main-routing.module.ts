import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [{ path: '', component: MainComponent },{path:"post/:id",component: PostComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
