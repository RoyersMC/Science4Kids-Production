import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modulo-video-ss',
  templateUrl: './modulo-video-ss.component.html'
})
export class ModuloVideoSsComponent implements OnInit {

  topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  
  constructor() { }

  ngOnInit() {
  }

}
