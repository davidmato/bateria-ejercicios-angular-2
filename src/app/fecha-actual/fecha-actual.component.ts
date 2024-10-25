import { Component } from '@angular/core';

@Component({
  selector: 'app-fecha-actual',
  standalone: true,
  imports: [],
  templateUrl: './fecha-actual.component.html',
  styleUrl: './fecha-actual.component.css'
})
export class FechaActualComponent {

  fechaHoraActual: string="";

  pad(n: number): string {
    return n < 10 ? '0' + n : n.toString();
  }

  actualizarFechaHora() {
    const fecha = new Date();
    const dia = this.pad(fecha.getDate());
    const mes = this.pad(fecha.getMonth() + 1);
    const anyo = fecha.getFullYear();
    const horas = this.pad(fecha.getHours());
    const minutos = this.pad(fecha.getMinutes());
    const segundos = this.pad(fecha.getSeconds());

    this.fechaHoraActual = `${dia}-${mes}-${anyo} ${horas}:${minutos}:${segundos}`;
  }
  constructor() {
    this.actualizarFechaHora();
    setInterval(() => this.actualizarFechaHora(), 1000);
  }



}
