import { Store } from '@ngrx/store';
import { UsuarioService } from './../../../services/usuario.service';
import { UsuarioModel } from './../../../models/UsuarioModel';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/store/app.reducers';

import * as ownActions from './../../../store/actions';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  private _subscription: Subscription = new Subscription();
  usuarios: UsuarioModel[] = [];
  desde = 0;
  totalRegistro = 0;
  cargando = true;
  paginado = true;

  constructor(private _usuarioService: UsuarioService,
    private _store: Store<AppState>, private _router: Router) { }

  ngOnInit(): void {
    this.cargarUsuarios();
    this.setSubscription();
  }

  setSubscription() {
    this._subscription.add(
      this._store.select('usuario')
        .subscribe((data) => {
          if (data.actualizar) {
            console.log('data.actualizar :>> ', data.actualizar);
            this.cargarUsuarios();
          }
        })
    );
  }

  cargarUsuarios() {
    console.log('this.desde :>> ', this.desde);
    this.cargando = true;
    this.usuarios = [];
    this._usuarioService.cargarUsuarios(this.desde)
      .subscribe((resp: any) => {
        this.cargando = false;
        this.totalRegistro = resp.total;
        this.usuarios = [...resp.usuarios];
        this.paginado = true;
        this._store.dispatch(ownActions.ActualizarUsuariosSuccess());
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
    this.cargarUsuarios();
  }

  buscarUsuarios(termino: string) {
    if (termino.length <= 0) {
      this.cargarUsuarios();
      return;
    }

    this.cargando = true;
    this.usuarios = [];
    this._usuarioService.buscarUsuarios(termino)
      .subscribe((usuarios: UsuarioModel[]) => {
        this.cargando = false;
        this.usuarios = [...usuarios];
        this.paginado = false;
      });
  }

  openModal(usuario: UsuarioModel) {
    this._store.dispatch(ownActions.seleccionarUsuario({ usuario }));
    this._router.navigate([{ outlets: { detail: 'detail' } }]);
    this._store.dispatch(ownActions.AbrirModalModalDetail());

  }

}
