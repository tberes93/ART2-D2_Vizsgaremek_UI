import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MyProfileContainerComponent } from './my-profile-container/my-profile-container.component';

const routes: Routes = [
  { path: '', component: MyProfileContainerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyProfileRoutingModule {}
