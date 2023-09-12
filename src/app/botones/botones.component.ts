import { Component } from '@angular/core';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.css']
})

export class BotonesComponent {
  text_color = "";

  button_disabled:boolean = false;

  src: string = "https://images.pexels.com/photos/18036794/pexels-photo-18036794/free-photo-of-taza-habitacion-blanco-libro.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load";
}
