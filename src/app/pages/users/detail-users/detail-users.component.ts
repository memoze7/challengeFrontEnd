import { UsuarioService } from './../../../services/usuario.service';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { UsuarioModel } from './../../../models/UsuarioModel';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppState } from 'src/app/store/app.reducers';
import * as ownActions from './../../../store/actions';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detail-users',
  templateUrl: './detail-users.component.html',
  styleUrls: ['./detail-users.component.scss']
})
export class DetailUsersComponent implements OnInit, OnDestroy {

  private _subscription: Subscription = new Subscription();
  usuario: UsuarioModel;
  imagenTemp: string;
  forma: FormGroup;

  constructor(private _store: Store<AppState>, private _fb: FormBuilder,
    private _usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.crearForma();
    this.setSubscriptions();
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  setSubscriptions() {
    this._subscription.add(
      this._store.select('usuario')
        .subscribe((data) => {
          if (data.usuario !== this.usuario) {
            this.usuario = { ...data.usuario };
            this.patchForma();
          }
        })
    );
    this._subscription.add(
      this._store.select('subirArchivo')
        .subscribe((data) => {
          this.imagenTemp = data.imagenTemp;
        })
    );
  }

  crearForma(): void {
    this.forma = this._fb.group({
      nombre: [null],
      email: [null],
      role: [null]
    });

  }

  patchForma(): void {
    this.forma.patchValue({
      nombre: this.usuario?.nombre,
      email: this.usuario?.email,
      role: this.usuario?.role
    });
  }
  ocultar(): void {
    this._store.dispatch(ownActions.OcultarModalModalDetail());
    setTimeout(() => {
      this._store.dispatch(ownActions.CerrarModalModalDetail());

    }, 200);
  }


  guardar() {
    if (this.forma.invalid) return

    const { nombre, email, role } = this.forma.value;


    this.usuario.nombre = nombre;
    this.usuario.email = email;
    this.usuario.role = role;

    this._usuarioService.actualizarUsuario(this.usuario)
      .subscribe((resp: any) => {
        const usuarioResp: UsuarioModel = resp.usuario;
        if (resp.usuario._id === this._usuarioService.usuario._id) {
          this._usuarioService.guardarLS(usuarioResp._id, this._usuarioService.token, usuarioResp);
        }

        Swal.fire('Usuario actualizado', usuarioResp.nombre, 'success');
      });

  }

  subirImagen() {
    this._store.dispatch(ownActions.AbrirModalSubirArchivo({ id: this.usuario?._id, tipo: 'usuarios' }));
  }

  borrarUsuario() {
    if (this.forma.invalid) return

    const { nombre, email, role } = this.forma.value;



  }



}
