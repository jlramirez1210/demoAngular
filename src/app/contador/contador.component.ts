import { Component } from '@angular/core';
import { Persona } from "../persona";

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {
  nombre:string = "jorge luis"

  persona:Persona = {
    nombre: "jorge luis",
    edad: 25
  }

  numero: number = 1;

  decrementar(){
    this.numero--;
  }

  incrementar(){
    this.numero++;
  }
}
