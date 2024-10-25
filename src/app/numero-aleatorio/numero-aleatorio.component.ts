import { Component } from '@angular/core';
import {NgFor} from '@angular/common';

@Component({
  selector: 'app-numero-aleatorio',
  standalone: true,
  imports: [NgFor],
  templateUrl: './numero-aleatorio.component.html',
  styleUrl: './numero-aleatorio.component.css'
})
export class NumeroAleatorioComponent {

  numero: number[] = [];


  numberAleatorio(cantidad:number){
    this.numero = [];
    for (let i = 0; i < cantidad; i++){
      const numeroAleatorio = Math.floor(Math.random() * 100)+1;
      this.numero.push(numeroAleatorio);
    }
  }

}
