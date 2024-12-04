import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EyePractiseContainerComponent } from './eye-practise-container/eye-practise-container.component';
import { PlainEyeExercisesComponent } from './eye-practise-container/plain-eye-exercises/plain-eye-exercises.component';
import { ReadingMinusculeLettersComponent } from './eye-practise-container/reading-minuscule-letters/reading-minuscule-letters.component';

const routes: Routes = [
  { path: '', component: EyePractiseContainerComponent },
  {
    path: 'simple-eye-practises',
    data: {title: 'Szemtorna'},
    component: PlainEyeExercisesComponent,
  },
  {
    path: 'read-small-letters',
    data: {title: 'Kisbetűk olvasása'},
    component: ReadingMinusculeLettersComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EyePractiseRoutingModule {}
