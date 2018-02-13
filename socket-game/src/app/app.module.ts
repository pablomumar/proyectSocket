import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SocketServiceService } from "./socket-service.service";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { InicioComponent } from './contenido/inicio/inicio.component';
import { JuegoComponent } from './contenido/juego/juego.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { ChatGlobalComponent } from './contenido/chat-global/chat-global.component';
import { ContenidoComponent } from './contenido/contenido.component';

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
    ChatGlobalComponent,
    ContenidoComponent
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
