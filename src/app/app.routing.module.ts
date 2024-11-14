import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

import { authGuard } from './services/authentication/auth.guard';

import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';

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
  // {
  //   path: 'machines',
  //   data: { title: 'Machines Page' },
  //   loadChildren: () => import('./modules/machines/machines.module').then(m => m.MachinesModule),
  // },
  // {
  //   path: 'partners',
  //   data: { title: 'Partners Page' },
  //   loadChildren: () => import('./modules/partners/partners.module').then(m => m.PartnersModule),
  // },
  // {
  //   path: 'data',
  //   data: { title: 'Data Page' },
  //   loadChildren: () => import('./modules/data/data.module').then(m => m.DataModule),
  // },
  // {
  //   path: 'events',
  //   data: { title: 'Events Page' },
  //   loadChildren: () => import('./modules/events/events.module').then(m => m.EventsModule),
  // },
  // {
  //   path: 'packages',
  //   data: { title: 'Packages Page' },
  //   loadChildren: () => import('./modules/packages/packages.module').then(m => m.PackagesModule),
  // },
  // {
  //   path: 'checks',
  //   data: { title: 'Checks Page' },
  //   loadChildren: () => import('./modules/checks/checks.module').then(m => m.ChecksModule),
  // },
  // {
  //   path: 'permissions',
  //   data: { title: 'Permissions Page' },
  //   loadChildren: () => import('./modules/permissions/permissions.module').then(m => m.PermissionsModule),
  // },
  // {
  //   path: 'reports',
  //   data: { title: 'Reports Page' },
  //   loadChildren: () => import('./modules/reports/reports.module').then(m => m.ReportsModule),
  // },
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
