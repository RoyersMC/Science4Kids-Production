import { NgModule, Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';

//modulos de paginas principales
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { ModuloOceanoComponent } from './mod-oceano/modulo-oceano/modulo-oceano.component';
import { ModuloSelvaComponent } from './mod-selva/modulo-selva/modulo-selva.component';
import { ModuloCuerpoHumanoComponent } from './mod-cuerpo-humano/modulo-cuerpo-humano/modulo-cuerpo-humano.component';
import { ModuloSistemaSolarComponent } from './mod-sistema-solar/modulo-sistema-solar/modulo-sistema-solar.component';

//modulos de juegos
import { ModuloJuegoOceanoComponent } from './mod-oceano/modulo-juego-oceano/modulo-juego-oceano.component';
import { ModuloJuegoSelvaComponent } from './mod-selva/modulo-juego-selva/modulo-juego-selva.component';
import { ModuloJuegoChComponent } from './mod-cuerpo-humano/modulo-juego-ch/modulo-juego-ch.component';
import { ModuloJuegoSsComponent } from './mod-sistema-solar/modulo-juego-ss/modulo-juego-ss.component';

//modulos de informacion
import { ModuloInfoOceanoComponent } from './mod-oceano/modulo-info-oceano/modulo-info-oceano.component';
import { ModuloInfoSelvaComponent } from './mod-selva/modulo-info-selva/modulo-info-selva.component';
import { ModuloInfoChComponent } from './mod-cuerpo-humano/modulo-info-ch/modulo-info-ch.component';
import { ModuloInfoSsComponent } from './mod-sistema-solar/modulo-info-ss/modulo-info-ss.component';

//modulos de videos
import { ModuloVideoChComponent } from './mod-cuerpo-humano/modulo-video-ch/modulo-video-ch.component';
import { ModuloVideoOceanoComponent } from './mod-oceano/modulo-video-oceano/modulo-video-oceano.component';
import { ModuloVideoSelvaComponent } from './mod-selva/modulo-video-selva/modulo-video-selva.component';
import { ModuloVideoSsComponent } from './mod-sistema-solar/modulo-video-ss/modulo-video-ss.component';

//juego memoria
import { ReduxConfigModule } from './mod-selva/modulo-juego-selva/store';

import { MemoryComponent } from './mod-selva/modulo-juego-selva/memorygame/memory.component'
import { DashboardComponent } from './mod-selva/modulo-juego-selva/memorygame/dashboard/dashboard.component'
import { LogoComponent } from './mod-selva/modulo-juego-selva/memorygame/dashboard/logo.component'
import { InfoComponent } from './mod-selva/modulo-juego-selva/memorygame/dashboard/info.component'
import { ChessboardComponent } from './mod-selva/modulo-juego-selva/memorygame/chessboard/chessboard.component'
import { CardComponent } from './mod-selva/modulo-juego-selva/memorygame/chessboard/card.component'
import { StatusComponent } from './mod-selva/modulo-juego-selva/memorygame/status/status.component'

import { GameActions } from './mod-selva/modulo-juego-selva/store/action' 


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
  },

  //modulos de videos
  {
    path: 'videoCuerpoHumano',
    component: ModuloVideoChComponent
  },
  {
    path: 'videoOceano',
    component: ModuloVideoOceanoComponent
  },
  {
    path: 'videoSistemaSolar',
    component: ModuloVideoSsComponent
  },
  {
    path: 'videoSelva',
    component: ModuloVideoSelvaComponent
  },
  
  //juego memoria
  {
    path: 'redux',
    component: ReduxConfigModule
  },
  {
    path: 'memory',
    component: MemoryComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'logo',
    component: LogoComponent
  },
  {
    path: 'info',
    component: InfoComponent
  },
  {
    path: 'chessboard',
    component: ChessboardComponent
  },
  {
    path: 'card',
    component: CardComponent
  },
  {
    path: 'status',
    component: StatusComponent
  },
  {
    path: 'game',
    component: GameActions
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule, ReduxConfigModule],
  exports: [RouterModule],
  declarations: [
    MemoryComponent,
    DashboardComponent,
    LogoComponent,
    InfoComponent,
    ChessboardComponent,
    CardComponent,
    StatusComponent
  ],
  providers: [GameActions],
  bootstrap: [MemoryComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppRoutingModule { }
