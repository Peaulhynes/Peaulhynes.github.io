/// <reference types="@angular/localize" />

/*
 *  Protractor support is deprecated in Angular.
 *  Protractor is used in this example for compatibility with Angular documentation tools.
 */
import {bootstrapApplication, provideProtractorTestingSupport} from '@angular/platform-browser';
import {App} from './app/app';
import {provideRouter} from '@angular/router';
import routeConfig from './app/routes';
import AOS from 'aos';
import { provideAnimations } from '@angular/platform-browser/animations';

AOS.init();
bootstrapApplication(App, {
  providers: [provideProtractorTestingSupport(), provideRouter(routeConfig), provideAnimations()],
}).catch((err) => console.error(err));
