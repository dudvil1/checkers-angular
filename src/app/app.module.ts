import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameBoardComponent } from './Components/game-board/game-board.component';
import { GameConsoleComponent } from './Components/game-console/game-console.component';
import { SpaceComponent } from './Components/space/space.component';
import { KingComponent } from './Components/king/king.component';
import { PawnComponent } from './Components/pawn/pawn.component';

import { GameService } from './Services/game.service'

@NgModule({
  declarations: [
    AppComponent,
    GameBoardComponent,
    GameConsoleComponent,
    SpaceComponent,
    KingComponent,
    PawnComponent,
  ],
  imports: [BrowserModule],
  providers: [GameService],
  bootstrap: [AppComponent],
})
export class AppModule {}
