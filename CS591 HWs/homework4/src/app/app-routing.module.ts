import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { MovieComponent } from './movie/movie.component';

const routes: Routes = [
  {
    path: 'user/:name',
    component: UserComponent
  },
  {
    path: '',
    component: MovieComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
