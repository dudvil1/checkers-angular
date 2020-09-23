import { Component, Input } from "@angular/core";
import { Space } from "../../Models/space";
import { GameService } from "../../Services/game.service";

@Component({
  selector: "app-space",
  templateUrl: "./space.component.html",
  styleUrls: ["./space.component.css"],
})
export class SpaceComponent  {
  @Input() space: Space;

  constructor(public service: GameService) {}

}
