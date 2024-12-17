import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AppUser } from '../../../models/appuser';
import { UserService } from '../../../services/user.service';
import { Observable } from 'rxjs';
import { SnackbarService } from '../../../services/snackbar/snackbar.service';

@Component({
  selector: 'app-top-10-container',
  templateUrl: './top-10-container.component.html',
  styleUrl: './top-10-container.component.scss'
})
export class Top10ContainerComponent implements OnInit {

  title: string = 'Top 10 felhasználó lista';

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
          if (userList) {
            this.dataSource = userList;
          }
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
