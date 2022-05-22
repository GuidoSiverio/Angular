import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Guerrero } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  @Input() nuevo: Guerrero = {nombre: '', poder: 0};

  @Output() onNuevoGuerrero: EventEmitter<Guerrero> = new EventEmitter();

  agregar(){
    //event.preventDefault();  //impide que actualice la pagina
    
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }

    this.onNuevoGuerrero.emit( this.nuevo );
    
    this.nuevo = {nombre: '', poder: 0}
    
  }

}
