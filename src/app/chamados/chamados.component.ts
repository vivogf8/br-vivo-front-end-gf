import { ChamadosService } from './chamados.service';


import { Component, OnInit } from '@angular/core';

import { Chamado } from './chamado';


@Component({
  selector: 'app-chamados',
  templateUrl: './chamados.component.html',
  styleUrls: ['./chamados.component.scss']
})

export class ChamadosComponent implements OnInit {

  Chamados: Chamado[];

  constructor( private service: ChamadosService) { }

  ngOnInit() {
    this.service.list()
    .subscribe(dado => this.Chamados = dado);    

  }
 
}
