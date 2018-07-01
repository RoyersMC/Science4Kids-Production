import { Component, OnInit } from '@angular/core';
declare var slick: number;
@Component({
  selector: 'app-modulo-juego-oceano',
  templateUrl: './modulo-juego-oceano.component.html',
})
export class ModuloJuegoOceanoComponent implements OnInit {
contador: number = 0;

 ocultartortuga() {
  this.contador = this.contador + 1;
   document.getElementById('img1').style.display = 'none';
   this.ganar();
 }

 ocultarpulpo() {
  this.contador++;
  document.getElementById('img2').style.display = 'none';
  this.ganar();
}
ocultaranguila() {
  this.contador++;
  document.getElementById('img3').style.display = 'none';
  this.ganar();
}
ocultarcangrejo() {
  this.contador++;
  document.getElementById('img4').style.display = 'none';
  this.ganar();
}
ocultarpezangel() {
  this.contador++;
  document.getElementById('img5').style.display = 'none';
  this.ganar();
}
ocultarestrella() {
  this.contador++;
  document.getElementById('img6').style.display = 'none';
  this.ganar();
}
ocultarcangre() {
  this.contador++;
  document.getElementById('img7').style.display = 'none';
  this.ganar();
}
ocultarlabrido() {
  this.contador++;
  document.getElementById('img8').style.display = 'none';
  this.ganar();
}

ganar() {
  if (this.contador > 7) {
    document.getElementById('msg2').style.display = 'block';
  }
}

cerrarGanador() {
  document.getElementById('msg2').style.display = 'none';
}

  constructor() { }

  ngOnInit() {
  }

}
