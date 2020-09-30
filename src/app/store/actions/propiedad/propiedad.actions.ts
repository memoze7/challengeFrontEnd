import { PropiedadModel } from 'src/app/models/PropiedadModel';
import { createAction, props } from '@ngrx/store';

export const AbrirModalCrearEditar = createAction(
  '[Propiedad] Abrir Modal Crear Editar',
  props<{ propiedad?: PropiedadModel }>()
);

export const OcultarModalCrearEditar = createAction(
  '[Propiedad] Ocultar Modal Crear Editar'
);
export const CerrarModalCrearEditar = createAction(
  '[Propiedad] Cerrar Modal Crear Editar'
);

export const ActualizarPropiedades = createAction(
  '[Propiedad] Actualizar Propiedades'
);

export const ActualizarPropiedadesSuccess = createAction(
  '[Propiedad] Actualizar Propiedades Success'
);

