import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { SubirArchivoService } from './../../services/subir-archivo.service';
import Swal from 'sweetalert2';
import { Component, OnDestroy, OnInit } from '@angular/core';
import * as ownActions from './../../store/actions';
import { AppState } from 'src/app/store/app.reducers';


@Component({
  selector: 'app-modal-upload',
  templateUrl: './modal-upload.component.html',
  styleUrls: ['./modal-upload.component.scss']
})
export class ModalUploadComponent implements OnInit, OnDestroy {

  private _subscription: Subscription = new Subscription();
  imagenSubir: File;
  imagenTemp: string;
  tipo: string;
  id: string;
  oculto: string;

  constructor(private _store: Store<AppState>, private _subirArchivoService: SubirArchivoService) { }

  ngOnInit(): void {
    this.setSubscription();

  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  ocultar(): void {
    this._store.dispatch(ownActions.OcultarModalSubirArchivo());
    setTimeout(() => {
      this._store.dispatch(ownActions.CerrarModalSubirArchivo());
      this.imagenTemp = '';

    }, 200);
  }

  setSubscription() {
    this._subscription.add(
      this._store.select('subirArchivo')
        .subscribe((data) => {
          this.oculto = data.oculto;
          this.tipo = data.tipo;
          this.id = data.id;
          if (data.mostrar) {
          }
        })
    );
  }

  seleccionImage(archivo: File): void {
    if (!archivo) {
      this.imagenSubir = null;
      return;
    }

    if (archivo.type.indexOf('image') < 0) {
      Swal.fire('Sólo imagenes', 'El archivo seleccion no es una imagen', 'error');
      this.imagenSubir = null;
      return;
    }

    this.imagenSubir = archivo;

    let reader = new FileReader();
    let urlImagenTemp = reader.readAsDataURL(archivo);

    reader.onloadend = () => this.imagenTemp = reader.result.toString();
  }

  subirImagen() {

    if (!this.id) {
      this._store.dispatch(ownActions.SubirArchivo({ imagenTemp: this.imagenTemp, archivo: this.imagenSubir }));

      Swal.fire('Imagen cambiada', '', 'success');
      this.ocultar();
      return;
    }
    this._subirArchivoService.subirArchivo(this.imagenSubir, this.tipo, this.id)
      .then(resp => {

        Swal.fire('Imagen cambiada', '', 'success');
        this._store.dispatch(ownActions.ActualizarPropiedades
          ());
        this._store.dispatch(ownActions.SubirArchivo({ imagenTemp: this.imagenTemp, archivo: this.imagenSubir }));

        this.ocultar();

      })
      .catch(err => {
        console.log('Error en la carga... ');
      });

  }

  eliminar() {

  }

}
