import { ListPropiedadAdminComponent } from './pages/propiedad-admin/list-propiedad-admin/list-propiedad-admin.component';
import { PropiedadComponent } from './pages/propiedad/propiedad/propiedad.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: PropiedadComponent },
  { path: 'propiedades', component: ListPropiedadAdminComponent },
  { path: '**', component: PropiedadComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
