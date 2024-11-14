import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  sidenavState: WritableSignal<boolean> = signal(false);

  constructor() {
    this.loadSidenavState();
  }

  toggleSidenav(): void {
    this.sidenavState.update(current => !current);
    this.saveSidenavState();
  }

  private saveSidenavState(): void {
    localStorage.setItem('sidenavState', String(this.sidenavState()));
  }

  private loadSidenavState(): void {
    const savedSidenavState = localStorage.getItem('sidenavState');

    if (savedSidenavState !== null) {
      this.sidenavState.set(savedSidenavState === 'true');
    }
  }
}
