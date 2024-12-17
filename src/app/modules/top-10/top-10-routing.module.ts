import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Top10ContainerComponent } from './top-10-container/top-10-container.component';


const routes: Routes = [
  { path: '', component: Top10ContainerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Top10RoutingModule {}
