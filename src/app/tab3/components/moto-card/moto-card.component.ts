import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IMoto } from 'src/app/tab1/types/moto';

@Component({
  selector: 'app-moto-card',
  templateUrl: './moto-card.component.html',
  styleUrls: ['./moto-card.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
  ]
})
export class MotoCardComponent implements OnInit {

  @Input() moto!: IMoto;


  constructor() { }

  ngOnInit() { }

}
