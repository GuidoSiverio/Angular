import { Component, OnInit } from '@angular/core';
import { Guerrero } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-dbz',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  guerreros: Guerrero[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 8000
    },
  ]

  nuevo: Guerrero = {
    nombre: '',
    poder: 0
  }

  agregarNuevoGuerrero( guerrero: Guerrero){
    this.guerreros.push(guerrero);
  }
}
