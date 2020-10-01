import { UsuarioService } from './../../../services/usuario.service';
import { UsuarioModel } from './../../../models/UsuarioModel';
import { AppState } from 'src/app/store/app.reducers';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as ownActions from './../../../store/actions/';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  forma: FormGroup;
  cargando = false;


  constructor(private _store: Store<AppState>, private _fb: FormBuilder,
    private _router: Router, private _usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.crearForm();
  }

  crearForm() {
    this.forma = this._fb.group({
      nombre: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
      passwordConfirm: [null, Validators.required]
    });
  }


  ocultar(): void {
    this._store.dispatch(ownActions.OcultarModalAuth());
    setTimeout(() => {
      this._store.dispatch(ownActions.CerrarModalAuth());
    }, 200);
  }

  iniciarSesion(): void {
    this._router.navigate([{ outlets: { auth: 'signIn' } }]);
  }

  registrarUsuario() {

    if (this.forma.invalid) return;

    const { nombre, email, password } = this.forma.value;

    this.cargando = true;
    let usuario = new UsuarioModel(nombre, email, password);

    this._usuarioService.crearUsuario(usuario)
      .subscribe(resp => {
        Swal.fire('Usuario registrado', `se ha sido registrado el usuario con el correo ${resp.email}, a continuación, por favor inicie sesión`, 'success');
        this.cargando = false;
        this.forma.reset();
        this.iniciarSesion();
      }, error => this.cargando = false
      );
  }

}
