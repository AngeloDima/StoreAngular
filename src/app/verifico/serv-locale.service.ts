import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServLocaleService {

  constructor(private http: HttpClient) { }

  urlLocale: string = "http://localhost:3000/UtenteVerificato";

  utenteValido: boolean = false;

  getUtentiLogin(): Observable<any[]> {
    return this.http.get<any[]>(this.urlLocale);
  }

  login(nome: string, password: string) {
    this.getUtentiLogin().subscribe(utenti => {
      let check = utenti.find(dati => dati.nome === nome && dati.password === password);

      if (check) {
        this.utenteValido = true;
      } else {
        this.utenteValido = false;
      }
    });
  }



}



