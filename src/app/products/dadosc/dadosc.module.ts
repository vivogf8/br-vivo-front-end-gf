import { MatMenuModule, MatFormFieldModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { TableFilteringExample } from './dadosc.component';

@NgModule({
    declarations: [TableFilteringExample,TableFilteringExample],
    imports: [
        
    ],
    exports:[TableFilteringExample, MatMenuModule, MatFormFieldModule]
  })

  export class DadoscModule{}