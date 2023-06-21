import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { AllProducts } from '../models/all-products';

@Component({
  selector: 'app-elettronica',
  templateUrl: './elettronica.component.html',
  styleUrls: ['./elettronica.component.css']
})
export class ElettronicaComponent implements OnInit {
  data: AllProducts[] = [];

  constructor(private dataServ: DataService) { }

  ngOnInit(): void {
    this.dataServ.getElettronica().subscribe(data => {
      this.data = data;
      console.log(this.data);
    });
  }
}
