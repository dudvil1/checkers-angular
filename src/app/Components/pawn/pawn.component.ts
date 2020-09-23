import { Component, Input } from "@angular/core";
import { Pawn } from "../../Models/piece";

@Component({
  selector: "app-pawn",
  templateUrl: "./pawn.component.html",
  styleUrls: ["./pawn.component.css"],
})
export class PawnComponent {
  @Input() pawn: Pawn;
}
