import { PropiedadAdminModule } from './pages/propiedad-admin/propiedad-admin.module';
import { UsersModule } from './pages/users/users.module';

import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalUploadComponent } from './components/modal-upload/modal-upload.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ModalUploadComponent,

  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    UsersModule,
    PropiedadAdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
