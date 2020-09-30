
import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers';


export interface AppState {
  propiedad: reducers.PropiedadState;
  subirArchivo: reducers.SubirArchivoState;
}

export const appReducers: ActionReducerMap<AppState> = {
  propiedad: reducers.propiedadReducer,
  subirArchivo: reducers.subirArchivoReducer
}
