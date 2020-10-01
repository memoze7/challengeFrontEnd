import { Observable, throwError } from 'rxjs';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaderResponse, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // aqui validariamos el token
    // const headers = new HttpHeader({
    //   'token'
    // });

    const reqClone = req;
    return next.handle(reqClone).pipe(
      catchError(this.manejaError)
    );

  }

  manejaError(error: HttpErrorResponse) {
    console.warn(error.error);
    Swal.fire(error.error.message, error.error.errors.message, 'error')

    return throwError('Manejo de errores');
  };

}
