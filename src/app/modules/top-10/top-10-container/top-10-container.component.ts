import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AppUser } from '../../../models/appuser';
import { UserService } from '../../../services/user.service';
import { Observable } from 'rxjs';
import { SnackbarService } from '../../../services/snackbar/snackbar.service';
import {log} from '@angular-devkit/build-angular/src/builders/ssr-dev-server';

@Component({
  selector: 'app-top-10-container',
  templateUrl: './top-10-container.component.html',
  styleUrl: './top-10-container.component.scss'
})
export class Top10ContainerComponent implements OnInit {

  title: string = 'Top 10 felhasználó lista';
  displayedColumns: string[] = ['userName', 'score'];

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
    return this.userService.getTop10();
  }
}
