import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SocketServiceService } from "./socket-service.service";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { JuegoComponent } from './juego/juego.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { ChatGlobalComponent } from './chat-global/chat-global.component';

const appRoutes: Routes = [
  {path: '', component: JuegoComponent}, //Es InicioComponent cuando haga las rooms
  {path: 'game', component: JuegoComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    JuegoComponent,
    CabeceraComponent,
    ChatGlobalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    )
  ],
  providers: [SocketServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
