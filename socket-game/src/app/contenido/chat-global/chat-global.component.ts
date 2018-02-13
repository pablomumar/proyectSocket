import { Component, OnInit } from '@angular/core';
import {SocketServiceService} from "../../socket-service.service";

@Component({
  selector: 'app-chat-global',
  templateUrl: './chat-global.component.html',
  styleUrls: ['./chat-global.component.css']
})
export class ChatGlobalComponent implements OnInit {
  msg: string;
  msgList: string[] = [];

  constructor(private chatService: SocketServiceService) { }

  sendMsg(){
    this.chatService.sendMsg(this.msg);
    this.msgList.push(this.msg);
    this.msg = '';
  }

  ngOnInit() {
    this.chatService
      .getMsg()
      .subscribe((msg: string) => {
        this.msgList.push(msg);
      });
  }

}
