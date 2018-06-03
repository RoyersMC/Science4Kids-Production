import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modulo-juego-ss',
  templateUrl: './modulo-juego-ss.component.html',
  
  
})
export class ModuloJuegoSsComponent implements OnInit {

  public direccion1 = "/assets/images/iconos/mercurioIcon.png";
  public direccion2 = "/assets/images/iconos/venusIcon.png";
  public direccion3 = "/assets/images/iconos/tierraIcon.png";
  public direccion4 = "/assets/images/iconos/marteIcon.png";
  public direccion5 = "/assets/images/iconos/jupiterIcon.png";
  public direccion6 = "/assets/images/iconos/saturnoIcon.png";
  public direccion7 = "/assets/images/iconos/uranoIcon.png";
  public direccion8 = "/assets/images/iconos/neptunoIcon.png";

  //public direccion = this.direccion3;
  
  //transferData: Object = {msg: '/assets/images/iconos/solIcon.png'};
  //transferdata: string="/assets/images/iconos/solIcon.png";
  receivedData: Array<any> = [];

  transferDataSuccess($event: any) {
      this.receivedData.push(this.direccion8);
  }

  
  constructor() {
   }

  ngOnInit() {
  }

}
