import { Component } from '@angular/core';
import { Apiservice } from 'src/services/apiservice';
import { IMoto } from './types/moto';
import { moto_array } from './constant/motos';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

  motos: IMoto[] = moto_array

  constructor() { }



}
