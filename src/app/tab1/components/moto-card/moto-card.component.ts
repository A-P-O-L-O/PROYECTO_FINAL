import { Component, Input, OnInit } from '@angular/core';
import { IMoto } from '../../types/moto';

@Component({
  selector: 'app-moto-card',
  templateUrl: './moto-card.component.html',
  styleUrls: ['./moto-card.component.scss'],
  standalone: false
})
export class MotoCardComponent implements OnInit {

  @Input() moto!: IMoto;


  constructor() { }

  ngOnInit() { }

}
