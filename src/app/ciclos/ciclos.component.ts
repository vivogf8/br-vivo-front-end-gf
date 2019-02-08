

import { Component, OnInit } from '@angular/core';

import { Ciclo } from './ciclo';
import { CicloService } from './ciclos.service';

@Component({
  selector: 'app-ciclos',
  templateUrl: './ciclos.component.html',
  styleUrls: ['./ciclos.component.scss']
})

export class CiclosComponent implements OnInit {

  Ciclos: Ciclo[];

  constructor( private service: CicloService) { }

  ngOnInit() {
    this.service.list()
    .subscribe(dado => this.Ciclos = dado);    

  }

}
