import { Injectable } from '@angular/core';
import { Regra } from './regras';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class RegrasService{

    private readonly API= 'http://localhost:3000/';

    constructor(private http: HttpClient){}

  list(){
      return this.http.get<Regra[]>(this.API + 'seisMeses').pipe( tap(console.log) );
  }  
}