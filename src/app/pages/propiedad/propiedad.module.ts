import { SharedModule } from './../../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './../../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropiedadComponent } from './propiedad/propiedad.component';
import { PropiedadDetailComponent } from './propiedad-detail/propiedad-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from 'src/app/pipes/pipes.module';



@NgModule({
  declarations: [PropiedadComponent, PropiedadDetailComponent],
  imports: [

    BrowserModule,
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    PipesModule,
    SharedModule


  ],
  exports: [PropiedadComponent]
})
export class PropiedadModule { }
