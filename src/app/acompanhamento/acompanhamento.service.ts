import { Acompanhamento } from './acompanhamento';
import { Injectable, EventEmitter } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AcompanhamentoService{

    Dados = new EventEmitter<Acompanhamento>();
    
private readonly API = 'http://localhost:3000/';

    constructor(private http: HttpClient){ }

    list() {
        return this.http.get<Acompanhamento[]>(this.API + 'seisMeses')
        .pipe(
           tap(console.log)
        );
    }
}