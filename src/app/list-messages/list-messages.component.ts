import { Component } from '@angular/core';
import { MessageService } from "../message.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-list-messages',
  templateUrl: './list-messages.component.html',
  styleUrls: ['./list-messages.component.css']
})
export class ListMessagesComponent {
  course:string='';
  constructor(public messageService:MessageService, private route:ActivatedRoute) {}

  ngOnInit(){
    this.route.params.subscribe(params =>{
      this.course = params['message']
    });
  }
}
