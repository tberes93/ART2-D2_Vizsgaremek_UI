import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'pst-search-filter',
  templateUrl: './abstract-search-filter.component.html',
  styleUrl: './abstract-search-filter.component.scss'
})
export class AbstractSearchFilterComponent implements OnInit {
  formGroup?: FormGroup;

  @Input() title?: string;
  @Input() formDescriptor?: { [key: string]: any };
  @Input() selectables?: Map<string, any[]> = new Map();

  @Output() searchEvent = new EventEmitter();

  ngOnInit(): void {
    this.initializeFormGroup();
  }

  initializeFormGroup(): void {
    if (!this.formDescriptor) return;

    const group: { [key: string]: FormControl } = {};

    for (const [key, control] of Object.entries(this.formDescriptor)) {

      if (!control.type) control.type = 'text';

      switch (control.type) {
        case 'logical':
          group[control.controlName] = new FormControl(false);
          break;
        case 'selectable':
          group[control.controlName] = new FormControl('');
          break;
        case 'text':
        default:
          group[control.controlName] = new FormControl('');
          break;
      }
    }

    this.formGroup = new FormGroup(group);
  }

  searchClicked(): void {
    this.searchEvent.emit(this.formGroup!.value);
  }

  originalOrder = (a: any, b: any): number => {
    return 0;
  };

  countEmptyDivs(): Array<number> {
    if (!this.formDescriptor) return Array(0);
    switch (Object.keys(this.formDescriptor!).length % 4) {
      case 0:
        return Array(3);
      case 1:
        return Array(2);
      case 2:
        return Array(1);
      case 3:
        return Array(0);
      default:
        return Array(0);
    }
  }

  getSelectables(key: string) {
    return this.selectables?.get(key);
  }
}
