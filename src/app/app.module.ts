import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environement } from 'src/environment';

import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { Firestore, getFirestore, provideFirestore } from '@angular/fire/firestore';
import { FirebaseService } from './services/firebase.service';
import { NavbarComponent } from './navbar/navbar.component';
import { ComponentsComponent } from './navbar/components/components.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ComponentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environement.firebaseConfig)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
