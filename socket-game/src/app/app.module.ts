import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SocketServiceService } from "./socket-service.service";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { JuegoComponent } from './juego/juego.component';
import { CabeceraComponent } from './cabecera/cabecera.component';

const appRoutes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'game', component: JuegoComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    JuegoComponent,
    CabeceraComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    )
  ],
  providers: [SocketServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
