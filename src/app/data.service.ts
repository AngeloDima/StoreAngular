import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AllProducts, DettailProduct } from './models/all-products';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  url = "https://fakestoreapi.com/products";
  urlLimit = "https://fakestoreapi.com/products?limit=8"
  urlGioielli = "https://fakestoreapi.com/products/category/jewelery"
  urlUomo = "https://fakestoreapi.com/products/category/men's clothing"
  urlDonna = "https://fakestoreapi.com/products/category/women's clothing"


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

  urlElettronica = "https://fakestoreapi.com/products/category/electronics"

  getElettronica(): Observable<AllProducts[]> {
    return this.http.get<any[]>(this.urlElettronica).pipe(
      map((response: any[]) => {
        return response.map(item => {
          const prodottoVetrina: AllProducts = {
            id: item.id,
            titolo: item.title,
            prezzo: item.price,
            image: item.image
          };
          return prodottoVetrina;
        });
      })
    );
  }

  getGioielli(): Observable<AllProducts[]> {
    return this.http.get<any[]>(this.urlGioielli).pipe(
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



  getAllProductMax8() {
    return this.http.get<any[]>(this.urlLimit).pipe(
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
          image: response.image,
          valutazione: {
            stelle: response.rating.rate,
            ordinati: response.rating.count
          }
        };

        return prodottoVetrina as DettailProduct;
      })
    );
  }




}



