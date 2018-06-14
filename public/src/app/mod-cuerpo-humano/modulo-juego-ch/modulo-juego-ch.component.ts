import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-modulo-juego-ch',
  templateUrl: './modulo-juego-ch.component.html',
})
export class ModuloJuegoChComponent implements OnInit {

  receivedDataOjo: Array<any> = [];
  receivedDataDiente: Array<any> = [];
  receivedDataPulmon: Array<any> = [];
  receivedDataHigado: Array<any> = [];
  receivedDataPiel: Array<any> = [];
  receivedDataCerebro: Array<any> = [];
  receivedDataCorazon: Array<any> = [];
  receivedDataEstomago: Array<any> = [];
  receivedDataRinnon: Array<any> = [];
  receivedDataIntestino: Array<any> = [];

  receivedDataGanador: Array<any> = [];

  transferDataSuccessOjo($event: any) {
    this.receivedDataOjo.push($event);
  }
  
  transferDataSuccessDiente($event: any) {
    this.receivedDataDiente.push($event);
  }

  transferDataSuccessPulmon($event: any) {
    this.receivedDataPulmon.push($event);
  }

  transferDataSuccessHigado($event: any) {
    this.receivedDataHigado.push($event);
  }

  transferDataSuccessPiel($event: any) {
    this.receivedDataPiel.push($event);
  }

  transferDataSuccessCerebro($event: any) {
    this.receivedDataCerebro.push($event);
  }

  transferDataSuccessCorazon($event: any) {
    this.receivedDataCorazon.push($event);
  }

  transferDataSuccessEstomago($event: any) {
    this.receivedDataEstomago.push($event);
  }

  transferDataSuccessRinnon($event: any) {
    this.receivedDataRinnon.push($event);
  }

  transferDataSuccessIntestino($event: any) {
    this.receivedDataIntestino.push($event);
  }

  transferDataSuccessGanador($event: any) {
    this.receivedDataGanador.push($event);
  }

  ocultarOjo(){
    document.getElementById('div1').style.display = 'none';
    document.getElementById("pos1Humano").style.pointerEvents = "none";
  }

  ocultarDiente(){
    document.getElementById('div2').style.display = 'none';
    document.getElementById("pos2Humano").style.pointerEvents = "none";
  }

  ocultarPulmon(){
    document.getElementById('div3').style.display = 'none';
    document.getElementById("pos3Humano").style.pointerEvents = "none";
  }

  ocultarHigado(){
    document.getElementById('div4').style.display = 'none';
    document.getElementById("pos4Humano").style.pointerEvents = "none";
  }

  ocultarPiel(){
    document.getElementById('div5').style.display = 'none';
    document.getElementById("pos5Humano").style.pointerEvents = "none";
  }

  ocultarCerebro(){
    document.getElementById('div6').style.display = 'none';
    document.getElementById("pos6Humano").style.pointerEvents = "none";
  }

  ocultarCorazon(){
    document.getElementById('div7').style.display = 'none';
    document.getElementById("pos7Humano").style.pointerEvents = "none";
  }

  ocultarEstomago(){
    document.getElementById('div8').style.display = 'none';
    document.getElementById("pos8Humano").style.pointerEvents = "none";
  }

  ocultarRinnon(){
    document.getElementById('div9').style.display = 'none';
    document.getElementById("pos9Humano").style.pointerEvents = "none";
  }

  ocultarIntestino(){
    document.getElementById('div10').style.display = 'none';
    document.getElementById("pos10Humano").style.pointerEvents = "none";
  }

  constructor() { }

  ngOnInit() {
  }

}
