import { Ciclo } from './ciclo';
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CicloService{
    
private readonly API = 'http://localhost:3000/';

    constructor(private http: HttpClient){ }

    list() {
        return this.http.get<Ciclo[]>(this.API + 'chamadoAlertas')
        .pipe(
           tap(console.log)
        );
    }
}