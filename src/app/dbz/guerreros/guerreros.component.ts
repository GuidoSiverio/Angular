import { Component, Input } from '@angular/core';
import { Guerrero } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-guerreros',
  templateUrl: './guerreros.component.html'
})

export class GuerrerosComponent {

  @Input() guerreros: Guerrero[] = []; //obtiene los guerreros del main-page

}
