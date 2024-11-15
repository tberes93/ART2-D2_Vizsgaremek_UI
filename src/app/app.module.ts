import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './modules/shared/shared.module';

import { AuthInterceptor } from './services/authentication/auth.interceptor';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { environment } from '../enviroments/enviroment';
import { AppRoutingModule } from './app.routing.module';
import { MaterialModule } from './modules/material.module';
import {HeaderComponent} from './components/header/header.component';
import {SidenavComponent} from './components/sidenav/sidenav.component';
import {UsersComponent} from './components/users/users.component'; // Import MaterialModule

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    UsersComponent,
    LayoutComponent,
    LoginComponent,
    PageNotFoundComponent,
    SidenavComponent, // Nincs duplikálva
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    MaterialModule, // Importálva itt
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
