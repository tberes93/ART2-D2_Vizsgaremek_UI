import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {MaterialModule} from '../shared/material.module';
import {SharedModule} from '../shared/shared.module';

import {MyProfileRoutingModule} from './my-profile-routing.module';

import {MyProfileContainerComponent} from './my-profile-container/my-profile-container.component';
import {myProfileComponents} from './my-profile.components';

@NgModule({
  imports: [
    MyProfileRoutingModule,
    CommonModule,
    FormsModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  declarations: [MyProfileContainerComponent, ...myProfileComponents],
})
export class MyProfileModule {}
