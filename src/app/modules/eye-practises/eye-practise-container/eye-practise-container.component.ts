import { Component } from '@angular/core';

import { eyePractise } from '../../../core/utils/eye-practise';
import {EyePractiseInterface} from '../../../core/interfaces/eye-practise.interface';

@Component({
  selector: 'pst-eyePractise-container',
  templateUrl: './eye-practise-container.component.html',
  styleUrl: './eye-practise-container.component.scss',
})
export class EyePractiseContainerComponent {
  title: string = 'Szemtorna';

  eyePractiseInterfaces: EyePractiseInterface[];

  constructor() {
    this.eyePractiseInterfaces = Object.assign([], eyePractise);
  }
}
