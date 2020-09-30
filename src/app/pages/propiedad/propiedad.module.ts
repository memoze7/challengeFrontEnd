import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropiedadComponent } from './propiedad/propiedad.component';
import { PropiedadDetailComponent } from './propiedad-detail/propiedad-detail.component';



@NgModule({
  declarations: [PropiedadComponent, PropiedadDetailComponent],
  imports: [
    CommonModule
  ],
  exports: [PropiedadComponent]
})
export class PropiedadModule { }
