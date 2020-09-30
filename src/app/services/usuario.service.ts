import { URL_SERVICIOS } from './../config/config';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  getToken(): string {
    return `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7InJvbGUiOiJBRE1JTl9ST0xFIiwiX2lkIjoiNWY3MzZkMDIyNmQ3Yzc1NDQ4ZjEwYmYxIiwibm9tYnJlIjoidGVzdDIiLCJlbWFpbCI6InRlc3QyQHRlc3QuY29tIiwicGFzc3dvcmQiOiI6KSIsIl9fdiI6MH0sImlhdCI6MTYwMTQ5ODEzOSwiZXhwIjoxNjAxNTEyNTM5fQ.5hzCjNmcZn9oWSJ8YuYHpYoFWvZ9bSDQEXgqE_7ec7Q`;
  }

  constructor() { }

  cargarUsuarios(desde: number = 0) {
    let url = URL_SERVICIOS
  }

  // borrarUsuario(usuario: UsuarioModel) {
  // if(usuario._id === this._usuarioService.getId()) {
  //   Swal.fire('No puede borrar usuario', 'No se puede borrar a si mismo', 'error');
  //   return
  // }
  // }
}
