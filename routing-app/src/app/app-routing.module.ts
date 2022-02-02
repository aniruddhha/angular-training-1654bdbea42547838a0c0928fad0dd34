import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path : 'login', component : LoginComponent },
  { path : 'dash', component : DashComponent },
  { path : 'users', component : UsersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
