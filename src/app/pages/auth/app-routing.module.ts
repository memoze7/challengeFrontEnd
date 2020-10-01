import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'sigIn', component: SignInComponent, outlet: 'auth' },
  { path: 'signUp', component: SignUpComponent, outlet: 'auth' },
  { path: '**', component: SignInComponent, outlet: 'auth' }

];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    BrowserModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModuleAuth { }
