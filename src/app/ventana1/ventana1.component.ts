import { Component } from '@angular/core';

@Component({
  selector: 'app-ventana1',
  standalone: true,
  imports: [],
  templateUrl: './ventana1.component.html',
  styleUrl: './ventana1.component.css'
})
export class Ventana1Component {
  nuevaVentana: Window | null = null;
  resolucion: string = '';

  abrirVentana() {
    this.nuevaVentana = window.open('', '', 'width=400,height=400');
    this.actualizarResolucion();
  }

  redimensionarVentana(ancho: number, alto: number) {
    if (this.nuevaVentana) {
      this.nuevaVentana.resizeTo(ancho, alto);
      this.actualizarResolucion();
    }
  }

  actualizarResolucion() {
    if (this.nuevaVentana) {
      this.resolucion = `${this.nuevaVentana.innerWidth} x ${this.nuevaVentana.innerHeight}`;
    }
  }
}
