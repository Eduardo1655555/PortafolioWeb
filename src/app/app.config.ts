import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(), provideFirebaseApp(() => initializeApp({"projectId":"curriculumwebefa","appId":"1:839470820445:web:41d1109f8b99cb74b8b1b4","storageBucket":"curriculumwebefa.appspot.com","apiKey":"AIzaSyBhaG4EODMnz_dNqJRi_-wwQlKx9zgSomg","authDomain":"curriculumwebefa.firebaseapp.com","messagingSenderId":"839470820445"})), provideFirestore(() => getFirestore())]
};
