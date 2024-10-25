import { Component } from '@angular/core';

@Component({
  selector: 'app-ventana2',
  standalone: true,
  imports: [],
  templateUrl: './ventana2.component.html',
  styleUrl: './ventana2.component.css'
})
export class Ventana2Component {
  nuevaVentana: Window | null = null;
  x: number = 0;
  y: number = 0;

  abrirVentana() {
    this.nuevaVentana = window.open('', '', 'width=400,height=400');
    this.x = window.screenX + 100;
    this.y = window.screenY + 100;
    this.nuevaVentana?.moveTo(this.x, this.y);
  }

  moverVentana(dx: number, dy: number) {
    if (this.nuevaVentana) {
      this.x += dx;
      this.y += dy;
      this.nuevaVentana.moveTo(this.x, this.y);
    }
  }
}
