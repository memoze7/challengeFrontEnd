import { PropiedadesService } from './../../../services/propiedades.service';
import { PropiedadModel } from 'src/app/models/PropiedadModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propiedad',
  templateUrl: './propiedad.component.html',
  styleUrls: ['./propiedad.component.scss']
})
export class PropiedadComponent implements OnInit {

  propiedades: PropiedadModel[] = [];
  desde = 0;
  totalRegistro = 0;
  cargando = true;
  paginado = true;

  constructor(private _propiedadesService: PropiedadesService) { }

  ngOnInit(): void {
    this.cargarPropiedades();
  }

  cargarPropiedades(): void {

    this.cargando = true;
    this.propiedades = [];

    this._propiedadesService
      .cargarPropiedades(this.desde)
      .subscribe((resp: any) => {

        this.cargando = false;
        this.totalRegistro = resp.total;
        this.propiedades = [...resp.propiedad];
        this.paginado = true;

      });

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



}
