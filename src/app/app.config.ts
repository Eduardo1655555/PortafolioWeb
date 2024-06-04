import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
     provideAnimations(),
      provideRouter(routes),
       provideClientHydration(),
        provideFirebaseApp(() =>
           initializeApp({
            apiKey: "AIzaSyBhaG4EODMnz_dNqJRi_-wwQlKx9zgSomg",
            authDomain: "curriculumwebefa.firebaseapp.com",
             projectId: "curriculumwebefa",
            storageBucket: "curriculumwebefa.appspot.com",
            messagingSenderId: "839470820445",
            appId: "1:839470820445:web:41d1109f8b99cb74b8b1b4"
           })),
         provideFirestore(() => getFirestore())]
};
