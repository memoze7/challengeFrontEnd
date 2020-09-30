import { URL_SERVICIOS } from './../config/config';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PropiedadesService {

  constructor(private _http: HttpClient) { }

  cargarPropiedades(desde: number = 0) {
    const url = `${URL_SERVICIOS}/propiedades?desde=${desde}`;
    return this._http.get(url);
  }


}
