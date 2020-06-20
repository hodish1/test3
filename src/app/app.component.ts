import {
  Component,
  Output,
  ɵCodegenComponentFactoryResolver,
} from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "test3";
  valof2 = "123";

  useEmit(e) {
    this.valof2 = e;
  }
}
