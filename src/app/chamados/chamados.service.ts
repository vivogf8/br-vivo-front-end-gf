import { Chamado } from './chamado';
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ChamadosService{
    
private readonly API = 'http://localhost:3000/';

    constructor(private http: HttpClient){ }

    list() {
        return this.http.get<Chamado[]>(this.API + 'chamadoAlertas')
        .pipe(
           tap(console.log)
        );
    }
}