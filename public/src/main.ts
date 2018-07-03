import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { MemoryModule } from './app/mod-selva/modulo-juego-selva/memorygame/memory.module'

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

platformBrowserDynamic().bootstrapModule(MemoryModule)
  document.head.removeChild(document.querySelector('#splash-spinner'))
  document.body.removeChild(document.querySelector('.spinner'))



