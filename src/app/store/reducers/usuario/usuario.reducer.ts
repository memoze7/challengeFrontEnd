import { UsuarioModel } from './../../../models/UsuarioModel';
import { createReducer, on } from '@ngrx/store';
import * as ownActions from '../../actions';

export interface UsuarioState {
  usuario: UsuarioModel;
  actualizar: boolean;
  error: any
}

const usuarioState: UsuarioState = {
  usuario: null,
  actualizar: false,
  error: null
}

const _usuarioReducer = createReducer(
  usuarioState,
  on(ownActions.seleccionarUsuario, (state, { usuario }) => ({ ...state, usuario: { ...usuario } })),
  on(ownActions.ActualizarUsuarios,
    (state) => ({
      ...state, actualizar: true
    })),
  on(ownActions.ActualizarUsuariosSuccess,
    (state) => ({
      ...state, actualizar: false
    })),

);

export function usuarioReducer(state, action) {
  return _usuarioReducer(state, action);
}


