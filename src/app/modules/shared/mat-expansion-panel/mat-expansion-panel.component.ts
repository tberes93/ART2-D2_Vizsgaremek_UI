import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'pst-mat-expansion-panel',
  templateUrl: './mat-expansion-panel.component.html',
  styleUrl: './mat-expansion-panel.component.scss'
})
export class MatExpansionPanelComponent {
  @Input() title: string = '';
  @Input() template: TemplateRef<any> | null = null;

  isPanelOpened(): boolean {
    const storedPanelState = localStorage.getItem(this.title);
    return storedPanelState === 'true';
  }

  onPanelOpened(): void {
    localStorage.setItem(this.title, 'true');
  }

  onPanelClosed(): void {
    localStorage.setItem(this.title, 'false');
  }
}
