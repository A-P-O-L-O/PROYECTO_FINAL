import { Component } from '@angular/core';
import { IMoto } from './types/moto';
import { moto_array } from './constant/motos';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { LoginComponent } from './components/login/login.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

  motos: IMoto[] = moto_array

  constructor(
    private router: Router,
    private modalCtrl: ModalController
  ) { }


  async abrirLogin() {
    const modal = await this.modalCtrl.create({
      component: LoginComponent,
      breakpoints: [0, 0.5, 0.8],
      initialBreakpoint: 0.8,
      showBackdrop: true
    });

    await modal.present();
  }



}
