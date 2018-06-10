import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modulo-juego-ss',
  templateUrl: './modulo-juego-ss.component.html',
})
export class ModuloJuegoSsComponent implements OnInit {

  receivedDataMercurio: Array<any> = [];
  receivedDataVenus: Array<any> = [];
  receivedDataTierra: Array<any> = [];
  receivedDataMarte: Array<any> = [];
  receivedDataJupiter: Array<any> = [];
  receivedDataSaturno: Array<any> = [];
  receivedDataUrano: Array<any> = [];
  receivedDataNeptuno: Array<any> = [];

  transferDataSuccessMercurio($event: any) {
    this.receivedDataMercurio.push($event);
  }
  
  transferDataSuccessVenus($event: any) {
    this.receivedDataVenus.push($event);
  }

  transferDataSuccessTierra($event: any) {
    this.receivedDataTierra.push($event);
  }

  transferDataSuccessMarte($event: any) {
    this.receivedDataMarte.push($event);
  }

  transferDataSuccessJurpiter($event: any) {
    this.receivedDataJupiter.push($event);
  }

  transferDataSuccessSaturno($event: any) {
    this.receivedDataSaturno.push($event);
  }

  transferDataSuccessUrano($event: any) {
    this.receivedDataUrano.push($event);
  }

  transferDataSuccessNeptuno($event: any) {
    this.receivedDataNeptuno.push($event);
  }

  constructor() {
  }

  ngOnInit() {
  }

}
