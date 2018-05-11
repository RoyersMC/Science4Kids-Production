import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//modulos de paginas principales
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { ModuloOceanoComponent } from './modulo-oceano/modulo-oceano.component';
import { ModuloSelvaComponent } from './modulo-selva/modulo-selva.component';
import { ModuloCuerpoHumanoComponent } from './modulo-cuerpo-humano/modulo-cuerpo-humano.component';
import { ModuloSistemaSolarComponent } from './modulo-sistema-solar/modulo-sistema-solar.component';

//modulos de juegos
import { ModuloJuegoOceanoComponent } from './modulo-juego-oceano/modulo-juego-oceano.component';
import { ModuloJuegoSelvaComponent } from './modulo-juego-selva/modulo-juego-selva.component';
import { ModuloJuegoChComponent } from './modulo-juego-ch/modulo-juego-ch.component';
import { ModuloJuegoSsComponent } from './modulo-juego-ss/modulo-juego-ss.component';

//modulos de informacion
import { ModuloInfoOceanoComponent } from './modulo-info-oceano/modulo-info-oceano.component';
import { ModuloInfoSelvaComponent } from './modulo-info-selva/modulo-info-selva.component';
import { ModuloInfoChComponent } from './modulo-info-ch/modulo-info-ch.component';
import { ModuloInfoSsComponent } from './modulo-info-ss/modulo-info-ss.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'oceano',
    component: ModuloOceanoComponent
  },
  {
    path: 'selva',
    component: ModuloSelvaComponent
  },
  {
    path: 'cuerpoHumano',
    component: ModuloCuerpoHumanoComponent
  },
  {
    path: 'sistemaSolar',
    component: ModuloSistemaSolarComponent
  },

  //modulos de juegos
  {
    path: 'juegoOceano',
    component: ModuloJuegoOceanoComponent
  },
  {
    path: 'juegoSelva',
    component: ModuloJuegoSelvaComponent
  },
  {
    path: 'juegoCuerpoHumano',
    component: ModuloJuegoChComponent
  },
  {
    path: 'juegoSistemaSolar',
    component: ModuloJuegoSsComponent
  },
  //modulos de informacion
  {
    path: 'infoOceano',
    component: ModuloInfoOceanoComponent
  },
  {
    path: 'infoSelva',
    component: ModuloInfoSelvaComponent
  },
  {
    path: 'infoCuerpoHumano',
    component: ModuloInfoChComponent
  },
  {
    path: 'infoSistemaSolar',
    component: ModuloInfoSsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
