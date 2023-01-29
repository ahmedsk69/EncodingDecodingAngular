import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ADashboardComponent } from './Admin/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { UDashboardComponent } from './User/dashboard/dashboard.component';

const routes: Routes = [

  { path: '', redirectTo: 'Login', pathMatch: 'full' },
  { path: 'Login', component: LoginComponent},
  { path: 'AdminDashboard', component: ADashboardComponent},
  { path: 'UserDashboard', component: UDashboardComponent},
  { path: '**', redirectTo: 'Login'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
