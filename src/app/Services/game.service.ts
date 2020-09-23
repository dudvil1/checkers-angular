import { Injectable } from '@angular/core';
import { Piece, Pawn, King } from "../Models/piece";
import { Space } from "../Models/space";
import { CheckerBoard } from "../Models/checkerBoard";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class GameService {
  public board: any;
  private _selectedPiece: Piece = null;
  private _redTurn: boolean = true;
  private _doubleJump: boolean = false;

  private _redTurnBeh: BehaviorSubject<boolean>;
  private _resetGame: BehaviorSubject<boolean>;
  private _isWinner: BehaviorSubject<string>;

  constructor() {
    this._redTurnBeh = <BehaviorSubject<boolean>>new BehaviorSubject(true);
    this._resetGame = <BehaviorSubject<boolean>>new BehaviorSubject(true);
    this._isWinner = <BehaviorSubject<string>>new BehaviorSubject("none");
    this.resetGame();
  }

  resetGame() {
    this.board = new CheckerBoard().board;
    this._redTurn = true;
    this.loadResetGame(false);
    this.loadIsWinner("none");

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 8; j++) {
        if (this.board[i][j].playable === true) {
          this.board[i][j].addPiece(new Pawn("red", i, j));
        }
      }
    }
    for (let i = 5; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (this.board[i][j].playable === true) {
          this.board[i][j].addPiece(new Pawn("black", i, j));
        }
      }
    }
  }

  loadRedTurn(turn: boolean) {
    this._redTurnBeh.next(turn);
  }

  loadResetGame(reset: boolean) {
    this._resetGame.next(reset);
  }

  loadIsWinner(winner: string) {
    this._isWinner.next(winner);
  }

  get redTurnObs() {
    return this._redTurnBeh.asObservable();
  }

  // For Game Console
  get resetGameBeh() {
    return this._resetGame;
  }

  // For Game Board
  get resetGameObs() {
    return this._resetGame.asObservable();
  }

  // For Game Board
  get isWinnerObs() {
    return this._isWinner.asObservable();
  }

  clickEmptySpace(space: any) {}

  clickAPiece(space: any){}
}
