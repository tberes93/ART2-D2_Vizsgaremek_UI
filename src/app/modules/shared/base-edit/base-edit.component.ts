import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'pst-base-edit',
  templateUrl: './base-edit.component.html',
  styleUrl: './base-edit.component.scss'
})
export class BaseEditComponent implements AfterViewInit, OnInit {
  formGroup?: FormGroup;

  constructor(protected readonly route: ActivatedRoute) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.route.data.subscribe((data) => {
      if (data) {
        if (data['canEdit'] === false) {
          this.formGroup?.disable();
        }
      }
    });
  }
}
