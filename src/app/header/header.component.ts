import { Component, inject } from '@angular/core';

import { SidenavService } from '../services/sidenav/sidenav.service';

@Component({
  selector: 'pst-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private readonly sidenav: SidenavService = inject(SidenavService);

  toggleSidenav(): void {
    this.sidenav.toggleSidenav();
  }
}
