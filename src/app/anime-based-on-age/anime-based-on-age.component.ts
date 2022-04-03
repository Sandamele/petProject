import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anime-based-on-age',
  templateUrl: './anime-based-on-age.component.html',
  styleUrls: ['./anime-based-on-age.component.css']
})
export class AnimeBasedOnAgeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  animeListForUnderFive = [
    'Naruto',
    'Cardcaptor Sakura',
    'My Neighbor Totoro',
    'Little Witch Academia',
  ];
  animeListForUnderTen = [
    'The Secret World of Arrietty',
    'My Neighbor Totoro',
    'Ponyo',
    'Whisper of the Heart',
    'The Cat Returns',
    'Pokemon',
    'Cardcaptor Sakura',
  ];
  animeListForUnderFifteen = [
    'Dragon Ball',
    'Dragon Ball Z',
    'Dragon Ball Super',
    'Death Note',
    'Your lie in April(romance,high school)',
    "Another(one of the bloodiest anime's)",
    'Idaten Jump',
    'Naruto',
  ];
  animeListForUnderEighteen = [
    'Naruto',
    'Blue Exorcist',
    'Tokyo Ghoul',
    'The Seven Deadly Sins',
    'Seraph Of The End',
    'Toradora',
    'A Silent Voice',
    'Golden Time',
    'My Teen Romantic Comedy SNAFU',
  ];

  animeListForEighteenPlus = [
    'Toradora',
    'A Silent Voice',
    'Golden Time',
    'My Teen Romantic Comedy SNAFU',
    'Tokyo Ghoul',
    'The Seven Deadly Sins',
    'Seraph Of The End',
    'Naruto',
    'Blue Exorcist',
  ];
  userAge:number = -1;
  animeHeading:string = "";
  showAnimeList(age:any){
    this.userAge = parseInt(age); // converting the string to number
    this.animeHeading = "Anime for " + this.userAge + " year old to watch";
  }

}
