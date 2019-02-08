import { AcompanhamentoService } from './acompanhamento/acompanhamento.service';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = ' Guardião';
  description = 'vivo';
  private url ="/acompanhamento";
  data: any = {};

  requicisao : object[] = [];

  constructor(){
    
   
  }
}