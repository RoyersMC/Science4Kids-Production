import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-modulo-info-ch',
  templateUrl: './modulo-info-ch.component.html',
})
export class ModuloInfoChComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.collapsible').collapsible();
  }

}
