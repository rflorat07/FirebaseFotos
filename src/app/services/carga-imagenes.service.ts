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
    let storageRef = firebase.storage().ref();

    for (let item of archivos) {
      item.estaSubiendo = true;
      let uploadTask: firebase.storage.UploadTask = storageRef.child(`${this.CARPETA_IMAGENES}/${item.nombreArchivo}`).put(item.archivo);

      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot) => item.progreso = (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
        (error) => console.error('Error al subir', error),
        () => {
          item.url = uploadTask.snapshot.downloadURL;
          item.estaSubiendo = false;
          this.guardarImagen({
            nombre: item.nombreArchivo,
            url: item.url
          });
        });
    }
  }

  private guardarImagen(imagen: any) {
    this.af.database.list(`/${this.CARPETA_IMAGENES}`).push(imagen);
  }

}
