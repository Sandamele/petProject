import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'petProject';
  bgColor: string = '';

  // Guessing Number Game
  userNumber:number = -1;
  submitGuessedNumber(guessedNumber:any){
    this.userNumber = parseInt(guessedNumber);
  }
}
