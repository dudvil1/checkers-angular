import { Component, OnInit } from '@angular/core';
import { GameService } from "../../Services/game.service";
import { Observable } from "rxjs";
import { SpaceComponent } from '../space/space.component';

@Component({
  selector: "app-game-board",
  templateUrl: "./game-board.component.html",
  styleUrls: ["./game-board.component.css"],
})
export class GameBoardComponent implements OnInit {
  public board: any;

  public resetGame$: Observable<boolean>;

  constructor(private service: GameService) {}

  ngOnInit() {
    //Observables
    this.resetGame$ = this.service.resetGameObs;
    this.resetGame$.subscribe((reset) => {
      if (reset) {
        this.onReset();
      }
    });
    this.onReset();
  }

  onReset() {
    this.service.resetGame();
    this.board = this.service.board;
  }
}
