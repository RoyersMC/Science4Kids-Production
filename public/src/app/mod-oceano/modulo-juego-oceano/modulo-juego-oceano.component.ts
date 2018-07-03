import { Component, OnInit } from '@angular/core';
declare var slick: number;
@Component({
  selector: 'app-modulo-juego-oceano',
  templateUrl: './modulo-juego-oceano.component.html',
})
export class ModuloJuegoOceanoComponent implements OnInit {
contador: number = 0;

contador1: number = 0;
contador2: number = 0;
contador3: number = 0;
contador4: number = 0;
contador5: number = 0;
contador6: number = 0;
contador7: number = 0;
contador8: number = 0;

 ocultartortuga() {
   if (this.contador1 < 1) {
    this.contador1++;
    this.contador = this.contador + 1;
    document.getElementById('img1').style.display = 'none';
    document.getElementById('img11').style.display = 'block';
    this.ganar();
   }
 }

 ocultarpulpo() {
  if (this.contador2 < 1) {
    this.contador2++;
    this.contador++;
    document.getElementById('img2').style.display = 'none';
    document.getElementById('img22').style.display = 'block';
    this.ganar();
  }
}
ocultaranguila() {
  if (this.contador3 < 1) {
    this.contador3++;
    this.contador++;
    document.getElementById('img3').style.display = 'none';
    document.getElementById('img33').style.display = 'block';
    this.ganar();
  }
}
ocultarcangrejo() {
  if (this.contador4 < 1) {
    this.contador4++;
    this.contador++;
    document.getElementById('img4').style.display = 'none';
    document.getElementById('img44').style.display = 'block';
    this.ganar();
  }
}
ocultarpezangel() {
  if (this.contador5 < 1) {
    this.contador5++;
    this.contador++;
    document.getElementById('img5').style.display = 'none';
    document.getElementById('img55').style.display = 'block';
    this.ganar();
  }
}
ocultarestrella() {
  if (this.contador6 < 1) {
    this.contador6++;
    this.contador++;
    document.getElementById('img6').style.display = 'none';
    document.getElementById('img66').style.display = 'block';
    this.ganar();
  }
}
ocultarcangre() {
  if (this.contador7 < 1) {
    this.contador7++;
    this.contador++;
    document.getElementById('img7').style.display = 'none';
    document.getElementById('img77').style.display = 'block';
    this.ganar();
  }
}
ocultarlabrido() {
  if (this.contador8 < 1) {
    this.contador8++;
    this.contador++;
    document.getElementById('img8').style.display = 'none';
    document.getElementById('img88').style.display = 'block';
    this.ganar();
  }
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
