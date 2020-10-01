
import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers';


export interface AppState {
  propiedad: reducers.PropiedadState;
  subirArchivo: reducers.SubirArchivoState;
  modalDetail: reducers.ModalDetailState;
  auth: reducers.AuthState;
  usuario: reducers.UsuarioState;
}

export const appReducers: ActionReducerMap<AppState> = {
  propiedad: reducers.propiedadReducer,
  subirArchivo: reducers.subirArchivoReducer,
  modalDetail: reducers.modalDetailReducer,
  auth: reducers.AuthStateReducer,
  usuario: reducers.usuarioReducer
}
