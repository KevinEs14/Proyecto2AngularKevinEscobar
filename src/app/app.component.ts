import { Component, VERSION } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  nombre;
  ci;
  num;
  area;
  profesion;
  tiempo;
  total = "";
  Mostrar() {
    //   this.total=parseInt(this.num1)+parseFloat(this.num2);
    // console.log(this.nombre+""+this.ci+""+this.num+""+this.area+""+this.profesion+""+this.tiempo);
    this.total +=
      this.nombre +
      " : " +
      this.ci +
      " : " +
      this.num +
      " : " +
      this.area +
      " : " +
      this.profesion +
      " : " +
      this.tiempo;
  }
}
