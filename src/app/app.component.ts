import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FechaActualComponent} from './fecha-actual/fecha-actual.component';
import {NumeroAleatorioComponent} from './numero-aleatorio/numero-aleatorio.component';
import {NavegacionHistorialComponent} from './navegacion-historial/navegacion-historial.component';
import {Ventana1Component} from './ventana1/ventana1.component';
import {Ventana2Component} from './ventana2/ventana2.component';
import {CookieComponent} from './cookie/cookie.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FechaActualComponent, NumeroAleatorioComponent, NavegacionHistorialComponent, Ventana1Component, Ventana2Component, CookieComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BateriaEjerciciosAngular2';
}
