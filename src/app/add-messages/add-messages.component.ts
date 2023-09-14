import { Component } from '@angular/core';
import { MessageService } from "../message.service";

@Component({
  selector: 'app-add-messages',
  templateUrl: './add-messages.component.html',
  styleUrls: ['./add-messages.component.css']
})
export class AddMessagesComponent {
  constructor(public messageService:MessageService) {

  }
  //message?:string;
  message:string=''; //otra forma

  addMessage(){
    this.messageService.add(this.message);
    this.message = "";
  }
}
