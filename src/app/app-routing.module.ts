import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './web-api/group-panel/first.component';
import { Login } from './web-api/login/login.component';


const routes: Routes = [
  { path: 'first-component', component: FirstComponent },
  { path: 'login', component: Login },
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
