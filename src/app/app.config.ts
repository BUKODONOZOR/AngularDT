import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { es_ES, provideNzI18n } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';

registerLocaleData(es);

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({ "projectId": "angulardt-54f75", "appId": "1:462538158783:web:89646e8ef12ec25ccb4c0a", "storageBucket": "angulardt-54f75.firebasestorage.app", "apiKey": "AIzaSyAJpadYm5RGdOpBUXY0sdg9CMlOz-qule4", "authDomain": "angulardt-54f75.firebaseapp.com", "messagingSenderId": "462538158783" })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideNzI18n(es_ES), importProvidersFrom(
    FormsModule,
    NzButtonModule,
    NzInputModule,
    NzAlertModule
      
  )
    
    , provideAnimationsAsync(), provideHttpClient(), provideFirebaseApp(() => initializeApp({"projectId":"angulardt-54f75","appId":"1:462538158783:web:89646e8ef12ec25ccb4c0a","storageBucket":"angulardt-54f75.firebasestorage.app","apiKey":"AIzaSyAJpadYm5RGdOpBUXY0sdg9CMlOz-qule4","authDomain":"angulardt-54f75.firebaseapp.com","messagingSenderId":"462538158783"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};
