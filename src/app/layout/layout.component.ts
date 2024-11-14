import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

import { SidenavService } from '../services/sidenav/sidenav.service';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'pst-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  mode: FormControl = new FormControl('side');

  @ViewChild('matSidenav') matSidenav!: MatSidenav;

  constructor(private readonly sidenav: SidenavService) {}

  isSidenavOpen(): boolean {
    return this.sidenav.sidenavState();
  }
}
