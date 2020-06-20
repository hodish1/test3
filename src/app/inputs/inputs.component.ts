import {
  Component,
  OnInit,
  Output,
  Input,
  OnChanges,
  SimpleChanges,
} from "@angular/core";
import { EventEmitter } from "@angular/core";

@Component({
  selector: "app-inputs",
  templateUrl: "./inputs.component.html",
  styleUrls: ["./inputs.component.scss"],
})
export class InputsComponent implements OnInit {
  @Output() updateBrother: EventEmitter<string> = new EventEmitter();
  @Input() tobeaffected: string = "";

  constructor() {}

  ngOnInit() {}

  doTheThing(e) {
    if (e.target.value === "hulu") {
      this.updateBrother.emit(e.target.value);
    }
  }

  // hello(e) {
  //   console.log(e.target.value);
  //   if (e.target.value === "tada") {
  //     this.updateBrother.emit("tada");
  //   }
  // }
}
