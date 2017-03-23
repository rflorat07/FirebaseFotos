import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { FileItem } from './../models/file-items';

import * as firebase from 'firebase';

@Injectable()
export class CargaImagenesService {

  private CARPETA_IMAGENES: string = 'img';

  constructor(public af: AngularFire) { }

  listaUltimasImagenes(numeroImagenes: number): FirebaseListObservable<any[]> {
    return this.af.database.list(`/${this.CARPETA_IMAGENES}`, {
      query: {
        limitToLast: numeroImagenes
      }
    });
  }

  cargar_imagenes_firebase(archivos: FileItem[]) {
    console.log(archivos);
  }

  private guardarImagen(imagen: any) {
    this.af.database.list(`/${this.CARPETA_IMAGENES}`).push(imagen);
  }

}
