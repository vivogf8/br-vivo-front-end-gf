import { MatMenuModule, MatFormFieldModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { MenuComponent } from './menu.component';
import { TableFilteringExample } from '../dadosc/dadosc.component';

@NgModule({
    declarations: [ MenuComponent],
    imports: [
           TableFilteringExample, 
           MatMenuModule,
           MatFormFieldModule 

    ],
    exports:[MenuComponent]
  })

  export class MenuModule{}