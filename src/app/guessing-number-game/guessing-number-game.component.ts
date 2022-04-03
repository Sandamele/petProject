import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-guessing-number-game',
  templateUrl: './guessing-number-game.component.html',
  styleUrls: ['./guessing-number-game.component.css']
})
export class GuessingNumberGameComponent implements OnInit {

  correctNumber:number = Math.floor(Math.random() * 100);
  @Input() guessedNumber: number = -1;
  results(correctNumber:number, guessedNumber:number){
    return (correctNumber === guessedNumber)? true : false;
  }
  constructor() { }

  ngOnInit(): void {
  }

  playAgian(){
    this.correctNumber = Math.floor(Math.random() * 100);
  }

}
