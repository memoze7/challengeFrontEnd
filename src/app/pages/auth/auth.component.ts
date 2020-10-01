import { FormBuilder, FormGroup } from '@angular/forms';


import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppState } from 'src/app/store/app.reducers';
import * as ownActions from './../../store/actions/';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styles: [
  ]
})
export class AuthComponent implements OnInit, OnDestroy {
  private _subscription: Subscription = new Subscription();
  oculto: string;
  forma: FormGroup;

  constructor(private _store: Store<AppState>, private _fb: FormBuilder) { }


  ngOnInit(): void {
    this.setSubscription();

  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();

  }

  setSubscription() {

    this._subscription.add(
      this._store.select('auth')
        .subscribe((data) => {
          this.oculto = data.oculto;
        })
    );

  }

  ocultar(): void {
    this._store.dispatch(ownActions.OcultarModalAuth());
    setTimeout(() => {
      this._store.dispatch(ownActions.CerrarModalAuth());
    }, 200);
  }


}
