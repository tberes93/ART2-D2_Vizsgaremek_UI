import { Component } from '@angular/core';

@Component({
  selector: 'pst-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  title: string = 'Szemtorna gyakorló program';

  pinChangeClicked(): void {
    // TODO: finish later
    console.log('PIN CHANGE CLICKED!');
  }
}
