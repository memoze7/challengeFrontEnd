import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppState } from 'src/app/store/app.reducers';
import * as ownActions from './../../store/actions';


@Component({
  selector: 'app-modal-detail',
  templateUrl: './modal-detail.component.html',
  styles: []
})
export class ModalDetailComponent implements OnInit, OnDestroy {
  private _subscription: Subscription = new Subscription();
  oculto: string;



  constructor(private _store: Store<AppState>) { }

  ngOnInit(): void {

    this.setSubscription();
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }


  ocultar(): void {
    this._store.dispatch(ownActions.OcultarModalModalDetail());
    setTimeout(() => {
      this._store.dispatch(ownActions.CerrarModalModalDetail());

    }, 200);
  }


  setSubscription() {
    this._subscription.add(
      this._store.select('modalDetail')
        .subscribe((data) => {
          this.oculto = data.oculto;
        })
    );
  }

}
