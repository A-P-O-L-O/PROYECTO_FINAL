import { Component, OnInit } from '@angular/core';
import { IMoto } from '../tab1/types/moto';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page implements OnInit {

  carrito: IMoto[] = []

  constructor() { }

  ngOnInit() {
    this.inicialCarrito()
  }

  inicialCarrito() {
    const motos = localStorage.getItem('carrito')

    if (motos) {
      this.carrito = JSON.parse(motos)
    }
  }




}
