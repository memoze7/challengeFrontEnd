import { ComponentsModule } from './components/components.module';
import { PropiedadComponent } from './pages/propiedad/propiedad/propiedad.component';
import { PipesModule } from './pipes/pipes.module';
import { MaterialModule } from './material/material.module';
import { PropiedadAdminModule } from './pages/propiedad-admin/propiedad-admin.module';
import { UsersModule } from './pages/users/users.module';

import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { appReducers } from './store/app.reducers';
import { StoreModule } from '@ngrx/store';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment'; // Angular CLI environment
import { PropiedadModule } from './pages/propiedad/propiedad.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule,

    MaterialModule,
    BrowserAnimationsModule,

    SharedModule,
    UsersModule,
    PropiedadAdminModule,
    PropiedadModule,
    ComponentsModule,


    // ================================================================
    // redux
    // ================================================================
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
