import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServLocaleService {
  urlLocale: string = "http://localhost:3000/UtenteVerificato";
  utenti: any[] = [];
  utenteValido: boolean = false;
  utenteLoggato: any[] = [];

  constructor(private http: HttpClient) { }

  getUtentiLogin(): Observable<any[]> {
    return this.http.get<any[]>(this.urlLocale);
  }

  login(nome: string, password: string) {
    this.getUtentiLogin().subscribe(utenti => {
      let check = utenti.find(dati => dati.nome === nome && dati.password === password);

      if (check) {
        this.utenteValido = true;
        this.utenteLoggato.push(check);
        // console.log("Utente loggato:", check);
        console.log("Utente loggato :", this.utenteLoggato);
      } else {
        this.utenteValido = false;
      }
    });
  }
}
