import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormChangeComponent } from './form-change/form-change.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GuessingNumberGameComponent } from './guessing-number-game/guessing-number-game.component';
import { AnimeBasedOnAgeComponent } from './anime-based-on-age/anime-based-on-age.component';

@NgModule({
  declarations: [
    AppComponent,
    FormChangeComponent,
    GuessingNumberGameComponent,
    AnimeBasedOnAgeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
