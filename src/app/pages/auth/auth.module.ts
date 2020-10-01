import { DirectiveModule } from './../../directive/directive.module';
import { MaterialModule } from './../../material/material.module';
import { AppRoutingModuleAuth } from './app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthComponent } from './auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [SignInComponent, SignUpComponent, AuthComponent],
  imports: [
    CommonModule,
    AppRoutingModuleAuth,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    DirectiveModule
  ],
  exports: [AuthComponent]
})
export class AuthModule { }
