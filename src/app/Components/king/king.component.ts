import { Component, Input } from '@angular/core';
import { King } from '../../Models/piece';

@Component({
  selector: "app-king",
  templateUrl: "./king.component.html",
  styleUrls: ["./king.component.css"],
})
export class KingComponent {
  @Input() king: King;
}
