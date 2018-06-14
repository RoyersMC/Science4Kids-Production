import { Component, OnInit } from '@angular/core';
declare var $:any;

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

  receivedDataGanador: Array<any> = [];

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

  transferDataSuccessGanador($event: any) {
    this.receivedDataGanador.push($event);
  }

  public contador;

  ocultarMercurio(){
    document.getElementById('div1').style.display = 'none';
    document.getElementById("pos1").style.pointerEvents = "none";
  }

  ocultarVenus(){
    document.getElementById('div2').style.display = 'none';
    document.getElementById("pos2").style.pointerEvents = "none";
  }

  ocultarTierra(){
    document.getElementById('div3').style.display = 'none';
    document.getElementById("pos3").style.pointerEvents = "none";
  }

  ocultarMarte(){
    document.getElementById('div4').style.display = 'none';
    document.getElementById("pos4").style.pointerEvents = "none";
  }

  ocultarJupiter(){
    document.getElementById('div5').style.display = 'none';
    document.getElementById("pos5").style.pointerEvents = "none";
  }

  ocultarSaturno(){
    document.getElementById('div6').style.display = 'none';
    document.getElementById("pos6").style.pointerEvents = "none";
  }

  ocultarUrano(){
    document.getElementById('div7').style.display = 'none';
    document.getElementById("pos7").style.pointerEvents = "none";
  }

  ocultarNeptuno(){
    document.getElementById('div8').style.display = 'none';
    document.getElementById("pos8").style.pointerEvents = "none";
  }
  
  constructor() {
  }

  ngOnInit() {  
  }

}
