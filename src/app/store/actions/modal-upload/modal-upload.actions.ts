
import { createAction, props } from '@ngrx/store';

export const AbrirModalSubirArchivo = createAction(
  '[Propiedad] Abrir Modal Subir Archivo',
  props<{ tipo?: string, id?: string }>()
);

export const OcultarModalSubirArchivo = createAction(
  '[Propiedad] Ocultar Modal Subir Archivo'
);
export const CerrarModalSubirArchivo = createAction(
  '[Propiedad] Cerrar Modal Subir Archivo'
);

export const SubirArchivo = createAction(
  '[Propiedad] Subir Archivo Propiedades',
  props<{ imagenTemp?: string, archivo?: File }>()
);

export const borrarImagenTemp = createAction(
  '[Propiedad] Subir Archivo Propiedades Success'
);

