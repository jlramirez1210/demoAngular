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
}
