import { Component } from '@angular/core';

import { myProfile } from '../../../core/utils/my-profile';
import {MyProfileInterface} from '../../../core/interfaces/my-profile.interface';

@Component({
  selector: 'pst-myProfile-container',
  templateUrl: './my-profile-container.component.html',
  styleUrl: './my-profile-container.component.scss',
})
export class MyProfileContainerComponent {
  title: string = 'Saját profil';

  myProfileInterfaces: MyProfileInterface[];

  constructor() {
    this.myProfileInterfaces = Object.assign([], myProfile);
  }
}
