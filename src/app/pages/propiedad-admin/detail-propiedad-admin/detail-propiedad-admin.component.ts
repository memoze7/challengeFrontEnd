import { SubirArchivoService } from './../../../services/subir-archivo.service';
import { PropiedadesService } from './../../../services/propiedades.service';
import { PropiedadModel } from 'src/app/models/PropiedadModel';
import * as ownActions from './../../../store/actions';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/store/app.reducers';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-detail-propiedad-admin',
  templateUrl: './detail-propiedad-admin.component.html',
  styleUrls: ['./detail-propiedad-admin.component.scss']
})

export class DetailPropiedadAdminComponent implements OnInit, OnDestroy {

  private _subscription: Subscription = new Subscription();
  oculto: string;
  propiedad: PropiedadModel;
  forma: FormGroup;
  imagenTemp: string;
  archivoSubir: File;

  constructor(private _store: Store<AppState>, private _propiedadesService: PropiedadesService,
    private _fb: FormBuilder, private _subirArchivoService: SubirArchivoService) { }

  ngOnInit(): void {
    this.crearForma();
    this.setSubscription();


  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  setSubscription() {

    this._subscription.add(
      this._store.select('propiedad')
        .subscribe((data) => {
          this.oculto = data.ocultar;
          if (data.mostrar) {
            this._store.dispatch(ownActions.borrarImagenTemp());
          }
          if (this.propiedad !== data.propiedad) {
            this.propiedad = data.propiedad;
            this.patchForma();
          }
        })
    );

    this._subscription.add(
      this._store.select('subirArchivo')
        .subscribe((data) => {
          this.imagenTemp = data.imagenTemp;
          this.archivoSubir = data.archivo;
        })
    );
  }

  ocultar(): void {
    this._store.dispatch(ownActions.OcultarModalCrearEditar());
    setTimeout(() => {
      this._store.dispatch(ownActions.CerrarModalCrearEditar());
    }, 200);

  }

  crearForma(): void {
    this.forma = this._fb.group({
      titulo: [null, Validators.required],
      direccion: [null, Validators.required],
      ciudad: [null, Validators.required],
      pais: [null, Validators.required],
      habitaciones: [null, Validators.required],
      banios: [null, Validators.required],
      precio: [null, Validators.required]
    });

  }

  patchForma(): void {
    this.forma.patchValue({
      titulo: this.propiedad?.titulo,
      direccion: this.propiedad?.direccion,
      ciudad: this.propiedad?.ciudad,
      pais: this.propiedad?.pais,
      habitaciones: this.propiedad?.habitaciones,
      banios: this.propiedad?.banios,
      precio: this.propiedad?.precio,
    });
  }

  guardar() {

    if (this.forma.invalid) return

    const { titulo, direccion, ciudad, pais, habitaciones, banios, precio } = this.forma.value;

    const propiedadGuardar = new PropiedadModel(
      titulo, direccion, ciudad, pais, habitaciones, banios, this.propiedad._id, this.propiedad.fotografia, precio);

    if (!this.propiedad._id) {
      this.showLoading('Creando propiedad');
      this._propiedadesService.guardarPropiedad(propiedadGuardar)
        .subscribe((resp: any) => {
          if (!this.imagenTemp) {
            Swal.fire('Propiedad creada', resp.propiedad.nombre, 'success');
            this._store.dispatch(ownActions.ActualizarPropiedades());
            this.ocultar();
            return;
          }
          this._subirArchivoService.subirArchivo(this.archivoSubir, 'propiedades', resp.propiedad._id)
            .then(resp => {

              Swal.fire('Propiedad creada', '', 'success');
              this._store.dispatch(ownActions.ActualizarPropiedades());
              this.ocultar();
            })

        }
        );
    } else {
      this.showLoading('Actualizando propiedad');
      this._propiedadesService.editarPropiedad(propiedadGuardar)
        .subscribe((resp: any) => {
          Swal.fire('Propiedad actualizada', resp.propiedad.nombre, 'success');
          this._store.dispatch(ownActions.ActualizarPropiedades());
          this.ocultar();
        });
    }
  }

  showLoading(title: string): void {
    Swal.fire({
      title,
      allowOutsideClick: false
    });
    Swal.showLoading();

  }

  borrarPropiedad(borrarPropiedad: PropiedadModel) {
    Swal.fire({
      title: '¿Está usted esta seguro?',
      text: `Esta a punto de borrar la propiedad ${borrarPropiedad.titulo} definitivamente`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        this.showLoading('Borrando propiedad')
        this._propiedadesService.borrarPropiedad(borrarPropiedad).subscribe(
          (resp: any) => {
            Swal.fire('Propiedad borrada', resp.propiedad.nombre, 'success');
            this._store.dispatch(ownActions.ActualizarPropiedades());
            this.ocultar();

          }
        )
      }
    });
  }

  subirImagen() {
    this._store.dispatch(ownActions.AbrirModalSubirArchivo({ id: this.propiedad?._id, tipo: 'propiedades' }));
  }


}
