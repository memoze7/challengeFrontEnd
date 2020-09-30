import { DetailUsersComponent } from './detail-users/detail-users.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [ListUsersComponent, DetailUsersComponent],
  imports: [
    CommonModule
  ],
  exports: [ListUsersComponent, DetailUsersComponent]
})
export class UsersModule { }
