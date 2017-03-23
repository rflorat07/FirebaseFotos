import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

// Rutas
import { APP_ROUTING } from './app.routes';

// Config
import { firebaseConfig } from './config/firebase.config';

// services
import { CargaImagenesService } from './services/carga-imagenes.service';

// directives
import { NgDropFilesDirective } from './directives/ng-drop-files.directive';

// Components
import { AppComponent } from './app.component';
import { CargaComponent } from './components/carga/carga.component';
import { FotosComponent } from './components/fotos/fotos.component';


@NgModule({
  declarations: [
    AppComponent,
    CargaComponent,
    FotosComponent,
    NgDropFilesDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [CargaImagenesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
