import { Component } from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-cookie',
  standalone: true,
  imports: [NgIf],
  templateUrl: './cookie.component.html',
  styleUrl: './cookie.component.css'
})
export class CookieComponent {
  nombreUsuario: string | null = null;

  ngOnInit() {
    this.nombreUsuario = this.getCookie('nombreUsuario');
    if (!this.nombreUsuario) {
      this.nombreUsuario = prompt('Por favor, introduce tu nombre:');
      if (this.nombreUsuario) {
        this.setCookie('nombreUsuario', this.nombreUsuario, 1);
      }
    }
  }

  getCookie(name: string): string | null {
    const nameEQ = name + '=';
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  setCookie(name: string, value: string, days: number) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = 'expires=' + d.toUTCString();
    document.cookie = name + '=' + value + ';' + expires + ';path=/';
  }
}
