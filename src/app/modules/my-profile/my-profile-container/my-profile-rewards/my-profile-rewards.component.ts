import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../services/user.service';
import { AuthenticationService } from '../../../../services/authentication/authentication-service';
import { SnackbarService } from '../../../../services/snackbar/snackbar.service';
import { Observable } from 'rxjs/internal/Observable';
import { MatTableDataSource } from '@angular/material/table';
import { Reward } from '../../../../models/reward';
import { RewardType } from '../../../shared/enum/reward-type-enum';


@Component({
  selector: 'app-my-profile-rewards',
  templateUrl: './my-profile-rewards.component.html',
  styleUrl: './my-profile-rewards.component.css'
})
export class MyProfileRewardsComponent implements OnInit {

  title: string = "Jutalmaim";
  rewards?: Reward[];

  practiceDaysRewards?: Reward[];
  conseqDaysRewards?: Reward[];

   constructor(private readonly userService: UserService,
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
      this.getAllRewardsByUser(user.id).subscribe(
        {
          next: (rewardList) => {
            if (rewardList) {
              this.rewards = rewardList;
              this.practiceDaysRewards = rewardList.filter(item => item !== null && item.type !== null 
                && item.type === Object.keys(RewardType)[Object.values(RewardType).indexOf(RewardType.PRACTICEDAYS_REWARD)]); 


              this.conseqDaysRewards = rewardList.filter(item => item !== null && item.type !== null 
                && item.type === Object.keys(RewardType)[Object.values(RewardType).indexOf(RewardType.CONSECUTIVEDAYS_REWARD)]);
            }
          },
          error: (error) => {
            this.snackbar.errorMessage(error.message);
          }
        }
      );
    }

    public getAllRewardsByUser(userId: number): Observable<Reward[]> {
      return this.userService.getAllRewardsByUser(userId);
    }
}
