import { URL_SERVICIOS } from './../config/config';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  cargarUsuarios(desde: number = 0) {
    let url = URL_SERVICIOS
  }
}
