import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-modulo-info-selva',
  templateUrl: './modulo-info-selva.component.html',
})
export class ModuloInfoSelvaComponent implements OnInit {

  topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  
  constructor() { }

  ngOnInit() {

  // Make Reveal animate up and display when mouseenter
  $(document).on('mouseenter.hover-reveal','.hover-reveal', function (e){
    $(e.target).closest('.card').css('overflow', 'hidden');
    $(this).find('.card-content>span').attr('style', 'color: rgba(0,0,0,0) !important');
    $(this).find('.card-reveal').css({ display: 'block'})
      .velocity("stop", false)
      .velocity({translateY: '-100%'},
      {duration: 300,
       queue: false,
       easing: 'easeInOutQuad'});
  });

  // Make Reveal animate down and display none when mouseleave
  $(document).on('mouseleave.hover-reveal','.hover-reveal', function (e){
    $(this).find('.card-reveal').velocity(
      {translateY: 0}, {
        duration: 225,
        queue: false,
        easing: 'easeInOutQuad',
        complete: function() { $(this).css({ display: 'none'}); }
      }
    );
    $(this).find('.card-content>span').attr('style', '');
  });


  }

}
