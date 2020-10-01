import { DetailUsersComponent } from './../pages/users/detail-users/detail-users.component';


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'user', component: DetailUsersComponent, outlet: 'detail' },
  { path: '**', component: DetailUsersComponent, outlet: 'detail' }


];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    BrowserModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModuleComponents { }
