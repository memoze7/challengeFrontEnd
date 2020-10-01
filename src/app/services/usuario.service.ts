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
    const url = `${URL_SERVICIOS}/usuario?desde=${desde}`;
    return this._http.get(url);
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

  actualizarUsuario(usuario: UsuarioModel) {

    const url = `${URL_SERVICIOS}/usuario/${usuario._id}?token=${this.token}`;
    return this._http.put(url, usuario);
  }

  cambiarImagen(imagen: string) {
    const usuario: UsuarioModel = { ...this.usuario }
    usuario.img = imagen;
    this.guardarLS(usuario._id, this.token, usuario);
  }

  buscarUsuarios(terminos: string) {

    const url = `${URL_SERVICIOS}/buscar/coleccion/usuarios/${terminos}`;
    return this._http.get(url).pipe(
      map((resp: any) => resp.usuarios)
    );
  }

  borrarUsuario(usuario: UsuarioModel) {
    const url = `${URL_SERVICIOS}/usuario/${usuario._id}?token=${this.getToken()}`;
    return this._http.delete(url);
  }
}
