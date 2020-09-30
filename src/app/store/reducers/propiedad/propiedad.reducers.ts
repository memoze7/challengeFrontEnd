import { PropiedadModel } from 'src/app/models/PropiedadModel';
import { createReducer, on } from '@ngrx/store';
import * as ownActions from '../../actions';


export interface PropiedadState {
  propiedad: PropiedadModel;
  ocultar: string;
  mostrar: boolean;
  actualizar: boolean;
  error: any;
}

const propiedadStare: PropiedadState = {
  propiedad: null,
  ocultar: 'opacity-0 hidden',
  mostrar: false,
  actualizar: false,
  error: null
}

const _propiedadReducer = createReducer(
  propiedadStare,
  on(ownActions.AbrirModalCrearEditar,
    (state, { propiedad }) => ({
      ...state, ocultar: 'ease-out duration-300 opacity-1', propiedad: { ...propiedad }, mostrar: true
    })),
  on(ownActions.OcultarModalCrearEditar,
    (state) => ({
      ...state, ocultar: 'ease-in duration-200 opacity-0', mostrar: false
    })),
  on(ownActions.CerrarModalCrearEditar,
    (state) => ({
      ...state, ocultar: 'hidden opacity-0'
    })),
  on(ownActions.ActualizarPropiedades,
    (state) => ({
      ...state, actualizar: true
    })),
  on(ownActions.ActualizarPropiedadesSuccess,
    (state) => ({
      ...state, actualizar: false
    })),


)

export function propiedadReducer(state, action) {
  return _propiedadReducer(state, action);
}
