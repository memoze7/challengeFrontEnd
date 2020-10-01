import * as ownActions from './../../store/actions';
import { UsuarioService } from './../../services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducers';
import { Router } from '@angular/router';


@Component({
  selector: 'app-account-dropdown',
  templateUrl: './account-dropdown.component.html',
  styleUrls: ['./account-dropdown.component.scss']
})
export class AccountDropdownComponent implements OnInit {
  isOpen = false;

  constructor(public usuarioService: UsuarioService, private _store: Store<AppState>, private _router: Router) { }

  ngOnInit(): void { }

  mostrarCuenta() {
    this._store.dispatch(ownActions.seleccionarUsuario({ usuario: this.usuarioService.usuario }));
    this._router.navigate([{ outlets: { detail: 'detail' } }]);
    this._store.dispatch(ownActions.AbrirModalModalDetail());
    this.isOpen = false;
  }


}
