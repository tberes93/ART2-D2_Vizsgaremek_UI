import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

import { authGuard } from './services/authentication/auth.guard';

import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import {UsersComponent} from './modules/users/users.component';

const postRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    data: { title: 'Home Page' },
    component: HomeComponent,
  },
  {
    path: 'users',
    data: { title: 'Users Page' },
    component: UsersComponent,
  },
];

const appRoutingModule: Routes = [
  { path: 'login', title: 'Login Page', component: LoginComponent },
  {
    path: '', component: LayoutComponent, children: [
      ...postRoutes,
      { path: 'page-not-found', title: 'Page Not Found', component: PageNotFoundComponent },
      { path: '**', redirectTo: 'page-not-found', pathMatch: 'full' },
    ],
    canActivate: [authGuard],
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
]

const config: ExtraOptions = {
  canceledNavigationResolution: 'computed',
  scrollPositionRestoration: 'enabled',
  onSameUrlNavigation: 'reload',
}

@NgModule({
  imports: [RouterModule.forRoot(appRoutingModule, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
