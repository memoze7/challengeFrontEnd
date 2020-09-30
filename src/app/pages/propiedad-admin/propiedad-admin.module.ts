import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPropiedadAdminComponent } from './list-propiedad-admin/list-propiedad-admin.component';
import { DetailPropiedadAdminComponent } from './detail-propiedad-admin/detail-propiedad-admin.component';



@NgModule({
  declarations: [DetailPropiedadAdminComponent, ListPropiedadAdminComponent],
  imports: [
    CommonModule
  ],
  exports: [DetailPropiedadAdminComponent, ListPropiedadAdminComponent]
})
export class PropiedadAdminModule { }
