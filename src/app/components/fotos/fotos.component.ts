import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';

import { CargaImagenesService } from './../../services/carga-imagenes.service';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styles: []
})
export class FotosComponent implements OnInit {

  imagenes: FirebaseListObservable<any[]>;

  constructor(public _cargaImagenes: CargaImagenesService) {
    this.imagenes = this._cargaImagenes.listaUltimasImagenes(10);
  }

  ngOnInit() {
  }

}
