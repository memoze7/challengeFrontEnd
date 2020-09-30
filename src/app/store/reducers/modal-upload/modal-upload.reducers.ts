import { createReducer, on } from '@ngrx/store';
import * as ownActions from '../../actions';


export interface SubirArchivoState {
  tipo: string;
  id: string;
  oculto: string;
  mostrar: boolean;
  imagenTemp: string;
  archivo: File,
  error: any;
}

const subirArchivoState: SubirArchivoState = {
  tipo: '',
  id: '',
  oculto: 'opacity-0 hidden',
  mostrar: false,
  imagenTemp: null,
  archivo: null,
  error: null
};

const _subirArchivoReducer = createReducer(
  subirArchivoState,
  on(ownActions.AbrirModalSubirArchivo,
    (state, { tipo, id }) => ({
      ...state, oculto: 'ease-out duration-300 opacity-1', id, tipo, imagenTemp: null, mostrar: true
    })),
  on(ownActions.OcultarModalSubirArchivo,
    (state) => ({
      ...state, oculto: 'ease-in duration-200 opacity-0', mostrar: false
    })),
  on(ownActions.CerrarModalSubirArchivo,
    (state) => ({
      ...state, oculto: 'hidden opacity-0'
    })),
  on(ownActions.SubirArchivo,
    (state, { imagenTemp, archivo }) => ({
      ...state, imagenTemp, archivo
    })),
  on(ownActions.borrarImagenTemp,
    (state) => ({
      ...state, imagenTemp: null
    })),


);

export function subirArchivoReducer(state, action) {
  return _subirArchivoReducer(state, action);
}
