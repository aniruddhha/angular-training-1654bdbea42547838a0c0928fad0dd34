import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserDetailsComponent } from './users/user-details.component';
import { UsersComponent } from './users/users.component';

const userChildrenRoutes: Routes = [
  // :id is placeholder(route/path variable) for dynamic value
  { path: ':id', component: UserDetailsComponent }
]

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dash/:user', component: DashComponent },
  { path: 'users', component: UsersComponent, children: userChildrenRoutes },
  { path: 'reg', component: RegistrationComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
