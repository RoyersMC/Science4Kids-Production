import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './master/header/header.component';
import { FooterComponent } from './master/footer/footer.component';
import { ModuloOceanoComponent } from './mod-oceano/modulo-oceano/modulo-oceano.component';
import { ModuloSelvaComponent } from './mod-selva/modulo-selva/modulo-selva.component';
import { ModuloCuerpoHumanoComponent } from './mod-cuerpo-humano/modulo-cuerpo-humano/modulo-cuerpo-humano.component';
import { ModuloSistemaSolarComponent } from './mod-sistema-solar/modulo-sistema-solar/modulo-sistema-solar.component';
import { ModuloJuegoOceanoComponent } from './mod-oceano/modulo-juego-oceano/modulo-juego-oceano.component';
import { ModuloInfoOceanoComponent } from './mod-oceano/modulo-info-oceano/modulo-info-oceano.component';
import { ModuloJuegoSelvaComponent } from './mod-selva/modulo-juego-selva/modulo-juego-selva.component';
import { ModuloInfoSelvaComponent } from './mod-selva/modulo-info-selva/modulo-info-selva.component';
import { ModuloJuegoChComponent } from './mod-cuerpo-humano/modulo-juego-ch/modulo-juego-ch.component';
import { ModuloInfoChComponent } from './mod-cuerpo-humano/modulo-info-ch/modulo-info-ch.component';
import { ModuloJuegoSsComponent } from './mod-sistema-solar/modulo-juego-ss/modulo-juego-ss.component';
import { ModuloInfoSsComponent } from './mod-sistema-solar/modulo-info-ss/modulo-info-ss.component';
import {DndModule} from 'ng2-dnd';


@NgModule({
  declarations: [
    AppComponent,HomeComponent,AboutUsComponent,ContactComponent,HeaderComponent,FooterComponent,ModuloOceanoComponent,
    ModuloSelvaComponent,ModuloCuerpoHumanoComponent, ModuloSistemaSolarComponent, ModuloJuegoOceanoComponent, ModuloInfoOceanoComponent,
    ModuloJuegoSelvaComponent,ModuloInfoSelvaComponent, ModuloJuegoChComponent, ModuloInfoChComponent, ModuloJuegoSsComponent,
    ModuloInfoSsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterializeModule,
    DndModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
