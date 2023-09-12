import { Component } from '@angular/core';
import { Persona } from "../persona";

@Component({
  selector: 'app-bucles',
  templateUrl: './bucles.component.html',
  styleUrls: ['./bucles.component.css']
})
export class BuclesComponent {
  personas:Persona[] = [
    {nombre: 'jorge', edad: 20},
    {nombre: 'luis', edad: 25},
    {nombre: 'miguel', edad: 35},
    {nombre: 'carlos', edad: 40},
  ];
}
