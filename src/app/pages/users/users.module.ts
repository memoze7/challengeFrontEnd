import { MaterialModule } from './../../material/material.module';
import { DetailUsersComponent } from './detail-users/detail-users.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ListUsersComponent, DetailUsersComponent],
  imports: [
    CommonModule,
    PipesModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [ListUsersComponent, DetailUsersComponent]
})
export class UsersModule { }
