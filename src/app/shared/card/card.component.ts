import { Component, Input, OnInit } from '@angular/core';
import { PropiedadModel } from 'src/app/models/PropiedadModel';
import { PropiedadModule } from 'src/app/pages/propiedad/propiedad.module';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() propiedad: PropiedadModel;
  // propiedad: PropiedadModel;


  constructor() { }

  ngOnInit(): void {

  }

}
