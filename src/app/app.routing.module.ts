import {NgModule} from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';

import {authGuard} from './services/authentication/auth.guard';

import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {HomeComponent} from './components/home/home.component';
import {LayoutComponent} from './components/layout/layout.component';
import {LoginComponent} from './components/login/login.component';
import {UsersComponent} from './components/users/users.component';

const postRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    data: {title: 'Home Page'},
    component: HomeComponent,
  },
  {
    path: 'users',
    data: {title: 'Users Page'},
    component: UsersComponent,
  },
  {
    path: 'eye_practise',
    data: {title: 'Szemtorna'},
    loadChildren: () => import('./modules/eye-practises/eye-practise.module').then(m => m.EyePractiseModule),
  },
  {
    path: 'my_profile',
    data: {title: 'Saját profil'},
    loadChildren: () => import('./modules/my-profile/my-profile.module').then(m => m.MyProfileModule),
  },
];

const appRoutingModule: Routes = [
  {path: 'login', title: 'Login Page', component: LoginComponent},
  {
    path: '', component: LayoutComponent, children: [
      ...postRoutes,
      {path: 'page-not-found', title: 'Page Not Found', component: PageNotFoundComponent},
      {path: '**', redirectTo: 'page-not-found', pathMatch: 'full'},
    ],
    canActivate: [authGuard],
  },
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: '**', redirectTo: 'login', pathMatch: 'full'},
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
