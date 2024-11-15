import { Component } from '@angular/core';

import { AuthService } from '../../services/authentication/auth.service';
import { SnackbarService } from '../../services/snackbar/snackbar.service';

import { Nav } from '../../core/interfaces/nav.interface';
import { navs } from '../../core/utils/navs';

@Component({
  selector: 'pst-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
})
export class SidenavComponent {
  navs: Nav[];

  constructor(private readonly auth: AuthService, private readonly snackbar: SnackbarService) {
    this.navs = Object.assign([], navs);
  }

  userLogout(): void {
    this.auth.logout().then(() => this.snackbar.logoutSuccess());
  }
}
