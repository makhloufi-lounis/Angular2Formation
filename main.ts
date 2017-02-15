import { AppModule } from './app/app.module'; // Le module qui lance l'application
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; // le Module qui vas lancer l'application dans le navigateur

// la fonction qui vas 
platformBrowserDynamic().bootstrapModule(AppModule);