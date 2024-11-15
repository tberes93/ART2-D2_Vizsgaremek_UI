import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EyePractiseContainerComponent } from './eye-practise-container/eye-practise-container.component';

const routes: Routes = [
  { path: '', component: EyePractiseContainerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EyePractiseRoutingModule {}
