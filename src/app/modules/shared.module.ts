import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialModule } from './material.module';
import {AbstractSearchFilterComponent} from './shared/abstract-search-filter/abstract-search-filter.component';
import {BaseEditComponent} from './shared/base-edit/base-edit.component';
import {MatExpansionPanelComponent} from './shared/mat-expansion-panel/mat-expansion-panel.component';



const components = [
  AbstractSearchFilterComponent,
  BaseEditComponent,
  MatExpansionPanelComponent,
];

@NgModule({
  imports: [CommonModule, FormsModule, MaterialModule, ReactiveFormsModule, RouterModule],
  declarations: [...components],
  exports: [...components, MaterialModule],
})
export class SharedModule {}
