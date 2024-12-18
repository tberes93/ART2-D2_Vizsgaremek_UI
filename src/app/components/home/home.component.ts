import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
import { AppUser } from '../../models/appuser';
import { SnackbarService } from '../../services/snackbar/snackbar.service';
import { AuthenticationService } from '../../services/authentication/authentication-service';

@Component({
  selector: 'pst-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  title: string = 'Szemtorna gyakorló program';
  userData!: AppUser;

  //valtozók
  userFullName!: string;// = "Alma"; 
  numberOfPracticeDays: number = 0;
  numberOfConsecutiveDays: number = 0;

  constructor(private userService: UserService,
    private readonly authService: AuthenticationService,
    private readonly snackbar: SnackbarService,
  ) {
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
            this.userFullName = this.userData.userName;
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

  getUserFullName():string {
    if (this.userData && this.userData.userName) {
      return this.userData.userName;
    }
    return "";
  }

  getNumberOfPracticeDays():number {
    if (this.userData && this.userData.numberOfPracticeDays) {
      return this.userData.numberOfPracticeDays;
    }
    return 0;
  }

  getNumberOfConsecutiveDays():number {
    if (this.userData && this.userData.numberOfConsecutiveDays) {
      return this.userData.numberOfConsecutiveDays;
    }
    return 0;
  }

  /*
  pinChangeClicked(): void {
    // TODO: finish later
    console.log('PIN CHANGE CLICKED!');
  }*/
}
