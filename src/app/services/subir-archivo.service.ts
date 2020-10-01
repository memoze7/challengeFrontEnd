import { UsuarioService } from './usuario.service';
import { URL_SERVICIOS } from './../config/config';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubirArchivoService {

  tipo: string;
  id: string;
  constructor(private _usuarioService: UsuarioService) { }

  subirArchivo(archivo: File, tipo: string, id: string) {
    this.tipo = tipo;
    this.id = id;
    return new Promise((resolve, reject) => {

      let formData = new FormData();
      let xhr = new XMLHttpRequest();

      formData.append('imagen', archivo, archivo.name);

      xhr.onreadystatechange = () => {

        if (xhr.readyState === 4) {

          if (xhr.status === 200) {
            console.log('Imagen subida');
            console.log(xhr.response);
            if (this.tipo === 'usuarios' && this._usuarioService.usuario._id === this.id) {
              this._usuarioService.cambiarImagen(JSON.parse(xhr.response).usuario.img);
            }
            resolve(JSON.parse(xhr.response));
          } else {
            console.log('Fallo la subida');
            reject(xhr.response);
          }

        }
      };

      let url = URL_SERVICIOS + '/upload/' + tipo + '/' + id;

      xhr.open('PUT', url, true);
      xhr.send(formData);

    });

  }
}
