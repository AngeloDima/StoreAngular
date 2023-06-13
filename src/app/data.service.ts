import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AllProducts } from './models/all-products';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  url = "https://fakestoreapi.com/products";

  getAllProduct() {
    return this.http.get<any[]>(this.url).pipe(
      map((response: any[]) => {
        return response.map(item => {
          const prodottoVetrina = {
            id: item.id,
            titolo: item.title,
            prezzo: item.price,
            descrizione: item.description,
            categoria: item.category,
            image: item.image
          };

          return prodottoVetrina as AllProducts;
        });
      })
    );
  }
}



