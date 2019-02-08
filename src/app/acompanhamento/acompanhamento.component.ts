import { MenuComponent } from './../products/tabela/menu.component';
import { Component, OnInit } from '@angular/core';

import { AcompanhamentoService } from './acompanhamento.service';
import { Acompanhamento } from './acompanhamento'; 



@Component({
  selector: 'app-acompanhamento',
  templateUrl: './acompanhamento.component.html',
  styleUrls: ['./acompanhamento.component.scss']
})
export class AcompanhamentoComponent implements OnInit {
  Acompanhamento: Acompanhamento[] ;

  constructor( private service: AcompanhamentoService) { }



  ngOnInit() {
    this.service.list()
    .subscribe(dados => this.Acompanhamento = dados);
  }

}
