import { map } from 'rxjs/operators';
import { UsuarioModel } from './../models/UsuarioModel';
import { URL_SERVICIOS } from './../config/config';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuario: UsuarioModel;
  token: string;

  constructor(private _http: HttpClient, private _router: Router) {
    this.cargarStorage();
  }


  getToken(): string {
    return this.token;
  }

  isLogged(): boolean {
    return this.token.length > 5
  }

  isAdmin(): boolean {
    return this.usuario?.role === 'ADMIN_ROLE';
  }

  cargarStorage() {

    this.token = localStorage.getItem('token') || '';
    this.usuario = JSON.parse(localStorage.getItem('usuario')) || null;

  }



  guardarLS(id, token, usuario) {
    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('usuario', JSON.stringify(usuario));

    this.usuario = usuario;
    this.token = token;
  }

  cargarUsuarios(desde: number = 0) {
    let url = URL_SERVICIOS
  }

  crearUsuario(usuario: UsuarioModel) {
    let url = URL_SERVICIOS + '/usuario';

    return this._http.post(url, usuario)
      .pipe(
        map((resp: any) => {
          return resp.usuario;
        }));

  }

  login(usuario: UsuarioModel, recordar: boolean = false) {
    const url = URL_SERVICIOS + '/login';
    return this._http.post(url, usuario)
      .pipe(
        map((resp: any) => {
          this.guardarLS(resp.id, resp.token, resp.usuario);
          return resp.usuario;
        }));

  }

  logout() {
    this.usuario = null;
    this.token = '';
    localStorage.clear();

    this._router.navigate(['/']);
  }
  // borrarUsuario(usuario: UsuarioModel) {
  // if(usuario._id === this._usuarioService.getId()) {
  //   Swal.fire('No puede borrar usuario', 'No se puede borrar a si mismo', 'error');
  //   return
  // }
  // }
}
