<<<<<<< HEAD
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
=======
import { ApplicationConfig } from '@angular/core';
>>>>>>> f0c24a4 (sd)
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
<<<<<<< HEAD
import { provideHttpClient, HttpClient, withFetch } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

export const appConfig: ApplicationConfig = {
  providers: 
    [provideHttpClient(withFetch()), provideRouter(routes), provideClientHydration(),
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient],
        },
      })
    ),
  ]
=======

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration()]
>>>>>>> f0c24a4 (sd)
};
