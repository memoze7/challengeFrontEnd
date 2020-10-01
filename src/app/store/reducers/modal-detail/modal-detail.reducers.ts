import { createReducer, on } from '@ngrx/store';
import * as ownActions from '../../actions';

export interface ModalDetailState {
  oculto: string;

}

// oculto: 'ease-out duration-300 opacity-1'
const modalDetailState: ModalDetailState = {
  oculto: 'opacity-0 hidden'
};

const _modalDetailReducer = createReducer(
  modalDetailState,
  on(ownActions.AbrirModalModalDetail, (state) => ({
    ...state, oculto: 'ease-out duration-300 opacity-1'
  })),
  on(ownActions.OcultarModalModalDetail,
    (state) => ({
      ...state, oculto: 'ease-in duration-200 opacity-0'
    })),
  on(ownActions.CerrarModalModalDetail,
    (state) => ({
      ...state, oculto: 'hidden opacity-0'
    })),
);

export function modalDetailReducer(state, action) {
  return _modalDetailReducer(state, action);
}
