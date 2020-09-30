import { PropiedadesService } from './../../../services/propiedades.service';

import { PropiedadModel } from 'src/app/models/PropiedadModel';
import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-list-propiedad-admin',
  templateUrl: './list-propiedad-admin.component.html',
  styleUrls: ['./list-propiedad-admin.component.scss']
})
export class ListPropiedadAdminComponent implements OnInit {

  propiedades: PropiedadModel[] = [];
  desde = 0;
  totalRegistro = 0;
  cargando = true;


  constructor(private _propiedadesService: PropiedadesService) { }

  ngOnInit(): void {
    this.cargarPropiedades();
  }

  cargarPropiedades() {

    this.cargando = true;
    this._propiedadesService.cargarPropiedades(this.desde)
      .subscribe((resp: any) => {
        this.cargando = false;
        this.totalRegistro = resp.total;
        this.propiedades = [...resp.propiedad];
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

  buscarUsuario(termino: string) {

  }

}
