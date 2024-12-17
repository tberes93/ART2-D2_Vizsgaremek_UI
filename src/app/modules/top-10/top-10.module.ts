import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '../shared/material.module';
import {SharedModule} from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Top10RoutingModule } from './top-10-routing.module';
import { Top10ContainerComponent } from './top-10-container/top-10-container.component';
import { top10Components } from './top-10.components';


@NgModule({
  imports: [
    Top10RoutingModule,
    CommonModule,
    MaterialModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [Top10ContainerComponent, ...top10Components],
})
export class Top10Module { }
