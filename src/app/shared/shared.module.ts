import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AccountDropdownComponent } from './account-dropdown/account-dropdown.component';



@NgModule({
  declarations: [CardComponent, NavbarComponent, AccountDropdownComponent],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [CardComponent, NavbarComponent, AccountDropdownComponent]
})
export class SharedModule { }
