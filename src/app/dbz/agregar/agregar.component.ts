import { Component, Input } from '@angular/core';
import { Guerrero } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  @Input() nuevo: Guerrero = {nombre: '', poder: 0};

  agregar(){
    //event.preventDefault();  //impide que actualice la pagina
    
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    console.log(this.nuevo);
    
    this.nuevo = {nombre: '', poder: 0}
    
  }

}
