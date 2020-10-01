
import { createAction, props } from '@ngrx/store';

export const AbrirModalSubirArchivo = createAction(
  '[ModalUpload] Abrir Modal Subir Archivo',
  props<{ tipo?: string, id?: string }>()
);

export const OcultarModalSubirArchivo = createAction(
  '[ModalUpload] Ocultar Modal Subir Archivo'
);
export const CerrarModalSubirArchivo = createAction(
  '[ModalUpload] Cerrar Modal Subir Archivo'
);

export const SubirArchivo = createAction(
  '[ModalUpload] Subir Archivo ModalUpload',
  props<{ imagenTemp?: string, archivo?: File }>()
);

export const borrarImagenTemp = createAction(
  '[ModalUpload] Subir Archivo Propiedades Success'
);

