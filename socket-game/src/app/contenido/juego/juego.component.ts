import { Component, OnInit } from '@angular/core';
import {} from '@types/jquery';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {

  private cuenta: any = 5;
  public enable_shot: boolean = false;
  public partida_status: string;

  constructor() { }

  ngOnInit() {
  }

  reset_partida(){
    JuegoComponent.hideResetButton();
    this.reset_cuenta();
  }

  inicio_partida(){
    console.log('inicio partida');
    this.reset_cuenta();
    this.partida_status = 'On';
    this.cuenta_atras();
    JuegoComponent.hideStartButton()
  }




  reset_cuenta(){
    this.cuenta = 5;
    $('h1').css('font-size', 30 + 'vh');
    console.log('reset');
  }

  cuenta_atras() {
    console.log(this.cuenta);
    this.cuenta > 1 ? setTimeout(() => {
      this.cuenta--;
      this.cuenta_atras();
    }, 1000) : setTimeout(() => {
      this.cuenta = '¡¡Fuego!!';
      this.enable_shot = true;
      this.partida_status = 'End';
      console.log(this.partida_status);
      $('h1').css('font-size', 10 + 'vh');
    }, Math.random() * (4500 - 1500) + 1500);
  }

  // Hide or show buttons

  static hideStartButton(){
    $('#empezar').hide();
    $('#reset').show();
  }

  static hideResetButton(){
    $('#reset').hide();
    $('#empezar').show();
  }

}

