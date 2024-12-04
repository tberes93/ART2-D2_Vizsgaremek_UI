import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pst-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  title: string = 'Szemtorna gyakorló program';

  //valtozók
  userFullName: string = "Alma"; 
  numberOfPracticeDays: number = 0;
  numberOfConsecutiveDays: number = 0;

/*
  constructor(private authenticationService: AuthenticationService) {;
  }*/

  ngOnInit(): void {
    this.initData();
  }
  
  private initData(): void {
    //TODO: 
  };

  pinChangeClicked(): void {
    // TODO: finish later
    console.log('PIN CHANGE CLICKED!');
  }
}
