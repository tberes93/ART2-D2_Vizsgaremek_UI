import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './modules/shared/shared.module';

//import { AuthInterceptor } from './services/authentication/auth.interceptor';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app.routing.module';
import {HeaderComponent} from './components/header/header.component';
import {SidenavComponent} from './components/sidenav/sidenav.component';
import {UsersComponent} from './components/users/users.component'; // Import MaterialModule
import { MaterialModule } from './modules/shared/material.module';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    UsersComponent,
    LayoutComponent,
    LoginComponent,
    RegisterComponent,
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
  /*
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],*/
  
  bootstrap: [AppComponent],
})
export class AppModule {
  /*
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [
        { provide: HTTP_INTERCEPTORS, useClass: InternalErrorInterceptor, multi: true}
      ],
    };
  }*/
}
