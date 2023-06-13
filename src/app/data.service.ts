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
            image: item.image
          };

          return prodottoVetrina as AllProducts;
        });
      })
    );
  }

  getProductById(id: number) {
    const url = `${this.url}/${id}`;
    return this.http.get<any>(url).pipe(
      map((response: any) => {
        const prodottoVetrina = {
          id: response.id,
          titolo: response.title,
          prezzo: response.price,
          descrizione: response.description,
          categoria: response.category,
          image: response.image
        };

        return prodottoVetrina as AllProducts;
      })
    );
  }

}



