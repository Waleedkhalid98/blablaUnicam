import Aos from 'aos';
import {bootstrapApplication} from '@angular/platform-browser';
import {AppComponent} from './app/app.component';
import {appConfig} from './app/app.config';

Aos.init();
bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));