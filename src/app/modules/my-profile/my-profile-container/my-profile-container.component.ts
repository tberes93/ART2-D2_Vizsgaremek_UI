import { Component, OnInit } from '@angular/core';

import { myProfile } from '../../../core/utils/my-profile';
import {MyProfileInterface} from '../../../core/interfaces/my-profile.interface';
import { AuthenticationService } from '../../../services/authentication/authentication-service';
import { Observable } from 'rxjs/internal/Observable';
import { UserService } from '../../../services/user.service';
import { AppUser } from '../../../models/appuser';
import { SnackbarService } from '../../../services/snackbar/snackbar.service';

@Component({
  selector: 'pst-myProfile-container',
  templateUrl: './my-profile-container.component.html',
  styleUrl: './my-profile-container.component.scss',
})
export class MyProfileContainerComponent implements OnInit {
  title: string = 'Saját profil';
  userData!: AppUser;

  myProfileInterfaces: MyProfileInterface[];

  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthenticationService,
    private readonly snackbar: SnackbarService
  ) {
    this.myProfileInterfaces = Object.assign([], myProfile);
  }

  ngOnInit(): void {
    this.initData();
  }

  private initData(): void {
    const user = this.authService.userValue;
    if (!user || !user.id) {
      return;
    }
    this.getUserData(user.id).subscribe(
      {
        next: (user) => {
          if (user) {
            this.userData = user;
          }
        },
        error: (error) => {
          this.snackbar.errorMessage(error.message);
        }
      }
    );
  };

  public getUserData(userId: number): Observable<any> {
      return this.userService.getUserData(userId);
    }

  public getUserScore(): number {
    if (!this.userData) {
      return 0;
    }
    return !this.userData.score ? 0 : this.userData.score;
  }
}
