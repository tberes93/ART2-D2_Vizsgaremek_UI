import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {MaterialModule} from '../shared/material.module';
import {SharedModule} from '../shared/shared.module';

import {EyePractiseRoutingModule} from './eye-practise-routing.module';

import {EyePractiseContainerComponent} from './eye-practise-container/eye-practise-container.component';
import {eyePractisesComponents} from './eye-practises.components';

@NgModule({
  imports: [
    EyePractiseRoutingModule,
    CommonModule,
    FormsModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  declarations: [EyePractiseContainerComponent, ...eyePractisesComponents],
})
export class EyePractiseModule {}
