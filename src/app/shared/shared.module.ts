import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AccountDropdownComponent } from './account-dropdown/account-dropdown.component';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  declarations: [CardComponent, NavbarComponent, AccountDropdownComponent],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    PipesModule
  ],
  exports: [CardComponent, NavbarComponent, AccountDropdownComponent]
})
export class SharedModule { }
