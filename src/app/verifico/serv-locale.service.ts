import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServLocaleService {

  constructor(private http: HttpClient) { }

  urlLocale: string = "http://localhost:3000/esistente"

  getUtentiLogin(): Observable<any[]> {
    return this.http.get<any[]>(this.urlLocale)
  }

}
