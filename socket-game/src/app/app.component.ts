import { Component } from '@angular/core';
import {SocketServiceService} from "./socket-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(socketService: SocketServiceService){}
}
