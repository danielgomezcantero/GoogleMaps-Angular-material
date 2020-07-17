import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { MapaComponent } from './components/mapa/mapa.component';


import { AgmCoreModule } from '@agm/core';
import { MapaEditarComponent } from './components/mapa/mapa-editar/mapa-editar.component';
import { ReactiveFormsModule } from '@angular/forms';

//Angular Material


@NgModule({
  entryComponents:[
    MapaEditarComponent
  ],
  declarations: [
    AppComponent,
    MapaComponent,
    MapaEditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyB-3j93kWqxjDd4alROoxmRPxFo9iGaMYY'
    })//AIzaSyCLcjr8xQcOvoN2Pvvl2Sxn057VmL_LBr8   AIzaSyAA0qKFwsvXdsrC5_CckvCKQFClymQRwDc
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
