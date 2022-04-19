import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ContadorComponent } from './contador.component';


@NgModule({

    declarations: [
        ContadorComponent
    ],

    exports: [
        ContadorComponent
    ],

    imports: [
        CommonModule //hace funcionar directivas como ngFor, etc.
    ]


})


export class ContadorModule{}