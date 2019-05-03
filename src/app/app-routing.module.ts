import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { WashComponent } from './pages/wash/wash.component';

const routes: Routes = [
  { path: 'pages', component: DashboardComponent,
  children:[
    {path:'wash', component: WashComponent},
   
  ] },

  { path: 'login', component: LoginComponent },
  
  
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
