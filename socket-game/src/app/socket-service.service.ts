import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from "rxjs/Observable";

@Injectable()
export class SocketServiceService {
  private url = 'http://localhost:3000';
  private socket;

  constructor() {
    this.socket = io(this.url);
  }

  public sendMsg(msg){
    this.socket.emit('chat message', msg)
  }

  public getMsg(){
    return Observable.create(function(observer){
      this.socket.on('chat message', function(msg){
        observer.next(msg);
      });
    });
  }

}
