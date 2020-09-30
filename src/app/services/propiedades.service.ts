import { UsuarioService } from './usuario.service';
import { PropiedadModel } from 'src/app/models/PropiedadModel';
import { URL_SERVICIOS } from './../config/config';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class PropiedadesService {

  constructor(private _http: HttpClient, private _usuarioService: UsuarioService) { }

  cargarPropiedades(desde: number = 0) {
    const url = `${URL_SERVICIOS}/propiedades?desde=${desde}`;
    return this._http.get(url);
  }


  // http://localhost:3000/buscar/coleccion/propiedades/s
  buscarPropiedades(terminos: string) {

    const url = `${URL_SERVICIOS}/buscar/coleccion/propiedades/${terminos}`;
    return this._http.get(url).pipe(
      map((resp: any) => resp.propiedades)
    );
  }


  guardarPropiedad(propiedad: PropiedadModel) {
    const url = `${URL_SERVICIOS}/propiedades?token=${this._usuarioService.getToken()}`;
    return this._http.post(url, propiedad);
  }

  editarPropiedad(propiedad: PropiedadModel) {
    const url = `${URL_SERVICIOS}/propiedades/${propiedad._id}?token=${this._usuarioService.getToken()}`;
    return this._http.put(url, propiedad);
  }

  borrarPropiedad(propiedad: PropiedadModel) {
    const url = `${URL_SERVICIOS}/propiedades/${propiedad._id}?token=${this._usuarioService.getToken()}`;
    return this._http.delete(url);
  }

}
