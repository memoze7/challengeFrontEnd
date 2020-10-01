import { UsuarioModel } from './../../../models/UsuarioModel';
import { createAction, props } from '@ngrx/store';

export const seleccionarUsuario = createAction(
  '[usuario] Seleccionar Usuario a editar',
  props<{ usuario?: UsuarioModel }>()
);


export const ActualizarUsuarios = createAction(
  '[usuario] Actualizar Usuarios'
);

export const ActualizarUsuariosSuccess = createAction(
  '[usuario] Actualizar Usuarios Success'
);



