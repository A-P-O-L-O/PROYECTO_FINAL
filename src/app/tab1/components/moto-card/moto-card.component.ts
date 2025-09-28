import { Component, Input, OnInit } from '@angular/core';
import { IMoto } from '../../types/moto';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-moto-card',
  templateUrl: './moto-card.component.html',
  styleUrls: ['./moto-card.component.scss'],
  standalone: false
})
export class MotoCardComponent implements OnInit {

  @Input() moto!: IMoto;

  constructor(private toastCtrl: ToastController) { }

  ngOnInit() { }


  agregarAlCarrito() {
    const stored = localStorage.getItem('carrito');
    let carrito: IMoto[] = stored ? JSON.parse(stored) : [];

    carrito.push(this.moto);

    localStorage.setItem('carrito', JSON.stringify(carrito));
    this.showToast('Moto agregada al carrito');
  }


  async showToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 1500,
      color: 'success',
    });
    toast.present();
  }


}
