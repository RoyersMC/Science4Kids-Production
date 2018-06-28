import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-modulo-juego-oceano',
  templateUrl: './modulo-juego-oceano.component.html',
})
export class ModuloJuegoOceanoComponent implements OnInit {


  receivedDataTortuga: Array<any> = [];


  transferDataSuccessTortuga($event: any) {
    this.receivedDataTortuga.push($event);
  }






 ocultartortuga() {
   document.getElementById('img1').style.display = 'none';
 }

 ocultarpulpo() {
  document.getElementById('img2').style.display = 'none';
}
ocultaranguila() {
  document.getElementById('img3').style.display = 'none';
}
ocultarcangrejo() {
  document.getElementById('img4').style.display = 'none';
}

  constructor() { }

  ngOnInit() {
  }

}
