import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {AppUser} from '../../models/appuser';
import {UserService} from '../../services/user.service';
import {SnackbarService} from '../../services/snackbar/snackbar.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'pst-home',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  title: string = 'Felhasználók listája';

  displayedColumns: string[] = ['userName','firstName','lastName', 'lastPracticeDate','numberOfConsecutiveDays','numberOfPracticeDays'];

  dataSource?: MatTableDataSource<AppUser> = new MatTableDataSource();

  constructor(private userService : UserService,
              private readonly snackbar: SnackbarService,
  ) {
  }

  ngOnInit(): void {
    this.initData();
  }

  private initData(): void {
    this.getUserList().subscribe(
      {
        next: (userList) => {
          console.log(userList);
          if (userList) {
            this.dataSource = userList;
          }
          console.log(this.dataSource)
        },
        error: (error) => {
          this.snackbar.errorMessage(error.message);
        }
      }
    );
  };

  public getUserList(): Observable<any> {
    return this.userService.getAll();
  }
}
