import {
  ApplicationConfig,
  importProvidersFrom,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideRouter, withComponentInputBinding, withInMemoryScrolling } from '@angular/router';
import { NgbModule, NgbTooltipConfig } from '@ng-bootstrap/ng-bootstrap';
import { routes } from './app.routes';

export function tooltipConfigFactory() {
  const config = new NgbTooltipConfig();

  config.placement = 'top bottom auto';
  config.openDelay = 300;
  config.closeDelay = 100;
  config.container = 'body';

  return config;
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    importProvidersFrom(NgbModule),
    provideRouter(
      routes,
      withComponentInputBinding(),
      withInMemoryScrolling({ scrollPositionRestoration: 'top' }),
    ),
    {
      provide: NgbTooltipConfig,
      useFactory: tooltipConfigFactory,
    },
  ],
};
