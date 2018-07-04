import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modulo-video-selva',
  templateUrl: './modulo-video-selva.component.html'
})
export class ModuloVideoSelvaComponent implements OnInit {

  topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  
  constructor() { }

  ngOnInit() {
  }

}
