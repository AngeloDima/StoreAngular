import { Component, OnInit } from '@angular/core';
import { AllProducts } from '../models/all-products';
import { DataService } from '../data.service';

@Component({
  selector: 'app-uomo',
  templateUrl: './uomo.component.html',
  styleUrls: ['./uomo.component.css']
})
export class UomoComponent implements OnInit {

  data: AllProducts[] = []

  constructor(private dataServ: DataService) { }

  ngOnInit(): void {
    this.dataServ.getUomo().subscribe(data => {
      this.data = data;
      console.log(this.data);
    });
  }

}
