export class AllProducts {
  id?: number;
  titolo?: string;
  prezzo?: number;
  image?: string;
  constructor(id: number, titolo: string, prezzo: number, image: string) {
    this.id = id;
    this.titolo = titolo;
    this.prezzo = prezzo;
    this.image = image;

  }
}


export class DettailProduct {
  id?: number;
  titolo?: string;
  prezzo?: number;
  descrizione?: string;
  categoria?: string;
  image?: string;
  constructor(id: number, titolo: string, prezzo: number, descrizione: string, categoria: string, image: string) {
    this.id = id;
    this.titolo = titolo;
    this.prezzo = prezzo;
    this.descrizione = descrizione;
    this.categoria = categoria;
    this.image = image;

  }
}
