import { createReducer, on } from '@ngrx/store';
import * as ownActions from '../../actions';


export interface AuthState {
  oculto: string;
  error: any;
}

const authState: AuthState = {
  oculto: 'opacity-0 hidden',
  error: null
};

const _authStateReducer = createReducer(
  authState,
  on(ownActions.AbrirModalAuth,
    (state) => ({
      ...state, oculto: 'ease-out duration-300 opacity-1'
    })),
  on(ownActions.OcultarModalAuth,
    (state) => ({
      ...state, oculto: 'ease-in duration-200 opacity-0'
    })),
  on(ownActions.CerrarModalAuth,
    (state) => ({
      ...state, oculto: 'hidden opacity-0'
    })),



);

export function AuthStateReducer(state, action) {
  return _authStateReducer(state, action);
}
