import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        (<any>window).gtag('config', 'UA-120714705-1', {'page_path': event.urlAfterRedirects});
      }
    });
   }

  ngOnInit() {
    $('.button-collapse').sideNav({
      menuWidth: 200,
      edge: 'left',
      closeOnClick: true,
    });
  }


}
