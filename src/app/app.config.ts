import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"angulardt-54f75","appId":"1:462538158783:web:89646e8ef12ec25ccb4c0a","storageBucket":"angulardt-54f75.firebasestorage.app","apiKey":"AIzaSyAJpadYm5RGdOpBUXY0sdg9CMlOz-qule4","authDomain":"angulardt-54f75.firebaseapp.com","messagingSenderId":"462538158783"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};
