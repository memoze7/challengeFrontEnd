import { UsersModule } from './../pages/users/users.module';
import { AppRoutingModuleComponents } from './app-routing.module';
import { ModalUploadComponent } from './modal-upload/modal-upload.component';
import { ModalDetailComponent } from './modal-detail/modal-detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  declarations: [ModalDetailComponent, ModalUploadComponent],
  imports: [
    CommonModule,
    AppRoutingModuleComponents,
    UsersModule, PipesModule
  ], exports: [ModalDetailComponent, ModalUploadComponent]
})
export class ComponentsModule { }
