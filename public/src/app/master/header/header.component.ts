import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  video(){
    $("#spotFondo").show();
    var v = document.getElementsByTagName("video")[0];
    v.play();
  }  

  cerrarVideo(){
    document.getElementById('spotFondo').style.display = 'none';
    var v = document.getElementsByTagName("video")[0];
    v.pause();
    v.currentTime = 0;
  }

  constructor() { }

  ngOnInit() {
  }

}
