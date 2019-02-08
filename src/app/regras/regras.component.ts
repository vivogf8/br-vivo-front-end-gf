
import { RegrasService } from './regras.service';
import { Component, OnInit } from '@angular/core';

import {Regra} from './regras'; 

@Component({
  selector: 'app-regras',
  templateUrl: './regras.component.html',
  styleUrls: ['./regras.component.scss']
})
export class RegrasComponent implements OnInit {

  Regras: Regra[];

  constructor( private service: RegrasService) { }

  ngOnInit() {
    this.service.list()
    .subscribe(dados => this.Regras = dados);    
  }
  }

