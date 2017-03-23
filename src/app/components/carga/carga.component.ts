import { Component } from '@angular/core';

import { CargaImagenesService } from './../../services/carga-imagenes.service';

import { FileItem } from './../../models/file-items';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styles: []
})
export class CargaComponent {

  estaSobreDropZone: boolean = false;
  permitirCargar: boolean = true;

  archivos: FileItem[] = [];

  constructor(public _cargaImagenes: CargaImagenesService) { }

  archivoSobreDropZone(ev: boolean) {
    this.estaSobreDropZone = ev;
  }

  cargarImagenesFirebase() {
    this.permitirCargar = false;
    this._cargaImagenes.cargar_imagenes_firebase(this.archivos);
  }

  limpiarArchivos() {
    this.archivos = [];
    this.permitirCargar = true;
  }

}
