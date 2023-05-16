import { provideClientHydration } from '@angular/platform-browser';
import { ApplicationConfig } from '@angular/core';

export const appConfig: ApplicationConfig = {
  providers: [provideClientHydration(), ]
};
