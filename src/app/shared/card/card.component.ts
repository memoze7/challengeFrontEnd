import { Component, OnInit } from '@angular/core';
import { PropiedadModel } from 'src/app/models/PropiedadModel';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  propiedad: PropiedadModel;


  constructor() { }

  ngOnInit(): void {

    this.propiedad = new PropiedadModel('Casa modena en el centro de la ciudad', 'la gran Manzana', 'New York', 'Estados Unidos', 4, 2, null, 'https://images.unsplash.com/photo-1526944139247-8657f4a94da4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80', 150000, 4);


  }

}
