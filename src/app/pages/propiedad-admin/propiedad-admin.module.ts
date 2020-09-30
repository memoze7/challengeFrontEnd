import { BrowserModule } from '@angular/platform-browser';
import { PipesModule } from './../../pipes/pipes.module';
import { MaterialModule } from './../../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPropiedadAdminComponent } from './list-propiedad-admin/list-propiedad-admin.component';
import { DetailPropiedadAdminComponent } from './detail-propiedad-admin/detail-propiedad-admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [DetailPropiedadAdminComponent, ListPropiedadAdminComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule
  ],
  exports: [DetailPropiedadAdminComponent, ListPropiedadAdminComponent]
})
export class PropiedadAdminModule { }
