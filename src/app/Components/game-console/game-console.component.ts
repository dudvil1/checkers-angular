import { Component, OnInit } from '@angular/core';
import { GameService } from "../../Services/game.service";
import { Observable } from "rxjs";
import { BehaviorSubject } from "rxjs";

@Component({
  selector: "app-game-console",
  templateUrl: "./game-console.component.html",
  styleUrls: ["./game-console.component.css"],
})
export class GameConsoleComponent implements OnInit {
  public turn: string = null;

  public redTurn$: Observable<boolean>;

  public _resetGame: BehaviorSubject<boolean>;

  constructor(private service: GameService) {}

  ngOnInit() {
    this.redTurn$ = this.service.redTurnObs;
    this.redTurn$.subscribe((redTurn) => {
      this.turn = redTurn ? "Red" : "Black";
    });

    this._resetGame = this.service.resetGameBeh;
    this._resetGame.subscribe((reset) => {
      this.turn = "Red"; // When the game is reset by someone else set the turn to Red
    });
  }

  resetGame() {
    this._resetGame.next(true);
  }
}
