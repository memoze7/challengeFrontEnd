import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { PropiedadesService } from './../../../services/propiedades.service';

import { PropiedadModel } from 'src/app/models/PropiedadModel';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppState } from 'src/app/store/app.reducers';
import * as ownActions from './../../../store/actions';


@Component({
  selector: 'app-list-propiedad-admin',
  templateUrl: './list-propiedad-admin.component.html',
  styleUrls: ['./list-propiedad-admin.component.scss']
})
export class ListPropiedadAdminComponent implements OnInit, OnDestroy {

  private _subscription: Subscription = new Subscription();
  propiedades: PropiedadModel[] = [];
  desde = 0;
  totalRegistro = 0;
  cargando = true;
  paginado = true;


  constructor(private _propiedadesService: PropiedadesService,
    private _store: Store<AppState>) { }

  ngOnInit(): void {
    this.cargarPropiedades();
    this.setSubscription();

  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  setSubscription() {
    this._subscription.add(
      this._store.select('propiedad')
        .subscribe((data) => {
          if (data.actualizar) {
            this.cargarPropiedades();
          }
        })
    );
  }

  cargarPropiedades() {

    this.cargando = true;
    this.propiedades = [];
    this._propiedadesService.cargarPropiedades(this.desde)
      .subscribe((resp: any) => {
        this.cargando = false;
        this.totalRegistro = resp.total;
        this.propiedades = [...resp.propiedad];
        this.paginado = true;
        this._store.dispatch(ownActions.ActualizarPropiedadesSuccess());
      });
  }

  cargarDesde(valor: number) {
    const desde = this.desde + valor;
    if (desde >= this.totalRegistro) {
      return;
    }
    if (desde < 0) {
      return;
    }

    this.desde += valor;
    this.cargarPropiedades();
  }

  buscarPropiedad(termino: string) {
    if (termino.length <= 0) {
      this.cargarPropiedades();
      return;
    }

    this.cargando = true;
    this.propiedades = [];
    this._propiedadesService.buscarPropiedades(termino)
      .subscribe((propiedades: PropiedadModel[]) => {
        this.cargando = false;
        this.propiedades = [...propiedades];
        this.paginado = false;
      });
  }

  openModal(propiedad: PropiedadModel) {
    this._store.dispatch(ownActions.AbrirModalCrearEditar({ propiedad }));

  }



}
