import { UsuarioService } from './../../../services/usuario.service';
import { AppState } from 'src/app/store/app.reducers';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as ownActions from './../../../store/actions/';
import { UsuarioModel } from 'src/app/models/UsuarioModel';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  forma: FormGroup;
  cargando = false;


  constructor(private _store: Store<AppState>, private _fb: FormBuilder, private _router: Router,
    private _usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.crearForm();
  }

  crearForm() {
    this.forma = this._fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
    });
  }


  ocultar(): void {
    this._store.dispatch(ownActions.OcultarModalAuth());
    setTimeout(() => {
      this._store.dispatch(ownActions.CerrarModalAuth());
    }, 200);
  }

  registrese(): void {
    this._router.navigate([{ outlets: { auth: 'signUp' } }]);

  }

  iniciarSesion() {
    console.log(this.forma.value);
    console.log(this.forma.valid);
    if (this.forma.invalid) {
      return;
    }

    const { email, password } = this.forma.value;

    const usuario = new UsuarioModel(null, email, password);
    this.cargando = true;
    this._usuarioService.login(usuario)
      .subscribe((resp: any) => {
        console.log(resp);
        this.cargando = false;
        Swal.fire('Inició sesión', `Bienvenido ${resp.nombre}`, 'success');

        this.ocultar();
      }, error => this.cargando = false
      );

  }

}
