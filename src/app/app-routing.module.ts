import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeBasedOnAgeComponent } from './anime-based-on-age/anime-based-on-age.component';
import { AppComponent } from './app.component';
import { FormChangeComponent } from './form-change/form-change.component';
import { GuessingNumberGameComponent } from './guessing-number-game/guessing-number-game.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
