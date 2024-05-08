<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
=======
import { ApplicationConfig } from '@angular/core';
>>>>>>> f0c24a4 (sd)
=======
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
>>>>>>> c1b7c1b (s)
=======
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
>>>>>>> 6e23558 (update)
=======
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
>>>>>>> 9384f49 (s)
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> c1b7c1b (s)
=======
>>>>>>> 6e23558 (update)
=======
>>>>>>> 9384f49 (s)
import { provideHttpClient, HttpClient, withFetch } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

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
=======

export const appConfig: ApplicationConfig = {
=======

export const appConfig: ApplicationConfig = {
>>>>>>> 6e23558 (update)
=======

export const appConfig: ApplicationConfig = {
>>>>>>> 9384f49 (s)
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> c1b7c1b (s)
=======
>>>>>>> 6e23558 (update)
=======
>>>>>>> 9384f49 (s)
};
