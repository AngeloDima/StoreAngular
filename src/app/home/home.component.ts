import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { AllProducts } from '../models/all-products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  prodottoVetrina: AllProducts[] = [];

  constructor(private apiServ: DataService) { }

  ngOnInit(): void {
    this.getDati();
  }

  getDati() {
    this.apiServ.getAllProduct().subscribe((dati: AllProducts[]) => {
      this.prodottoVetrina = dati;
      console.log(this.prodottoVetrina);
    });
  }

}

