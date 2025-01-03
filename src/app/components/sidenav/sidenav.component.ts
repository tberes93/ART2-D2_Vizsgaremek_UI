import { Component } from '@angular/core';
import { SnackbarService } from '../../services/snackbar/snackbar.service';

import { Nav } from '../../core/interfaces/nav.interface';
import { navs } from '../../core/utils/navs';
import { AuthenticationService } from '../../services/authentication/authentication-service';

@Component({
  selector: 'pst-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
})
export class SidenavComponent {
  navs: Nav[];

  constructor(private readonly auth: AuthenticationService, private readonly snackbar: SnackbarService) {
    this.navs = Object.assign([], navs);
  }

  userLogout(): void {
    this.auth.logout();//.then(() => this.snackbar.logoutSuccess());
    this.snackbar.logoutSuccess();
  }
}
