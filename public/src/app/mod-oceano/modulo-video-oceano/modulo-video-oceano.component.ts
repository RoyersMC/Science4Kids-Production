import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modulo-video-oceano',
  templateUrl: './modulo-video-oceano.component.html'
})
export class ModuloVideoOceanoComponent implements OnInit {

  topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  
  constructor() { }

  ngOnInit() {
  }

}
