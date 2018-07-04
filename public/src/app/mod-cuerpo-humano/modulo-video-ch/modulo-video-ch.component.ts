import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modulo-video-ch',
  templateUrl: './modulo-video-ch.component.html',
})
export class ModuloVideoChComponent implements OnInit {

  topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  
  constructor() { }

  ngOnInit() {
  }

}
