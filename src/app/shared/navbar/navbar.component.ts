import { UsuarioService } from './../../services/usuario.service';
import { AbrirModalAuth } from './../../store/actions/auth/auth.actions';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/store/app.reducers';
import * as ownActions from './../../store/actions/auth/auth.actions';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isOpen = false;

  constructor(private _store: Store<AppState>, private _router: Router, public usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

  openAuth(module: string): void {
    this._store.dispatch(ownActions.AbrirModalAuth());
    this._router.navigate([{ outlets: { auth: module } }]);
  }


}
