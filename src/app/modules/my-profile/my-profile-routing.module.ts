import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MyProfileContainerComponent } from './my-profile-container/my-profile-container.component';
import { MyProfileRewardsComponent } from './my-profile-container/my-profile-rewards/my-profile-rewards.component';

const routes: Routes = [
  { path: '', component: MyProfileContainerComponent },
  {
    path: 'my_badges',
    data: {title: 'Rewards Page'},
    component: MyProfileRewardsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyProfileRoutingModule {}
