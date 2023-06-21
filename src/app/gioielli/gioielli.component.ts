import { Component, OnInit } from '@angular/core';
import { AllProducts } from '../models/all-products';
import { DataService } from '../data.service';

@Component({
  selector: 'app-gioielli',
  templateUrl: './gioielli.component.html',
  styleUrls: ['./gioielli.component.css']
})
export class GioielliComponent implements OnInit {

  data: AllProducts[] = []

  constructor(private dataServ: DataService) { }
  ngOnInit(): void {
    this.dataServ.getGioielli().subscribe(data => {
      this.data = data;
      console.log(this.data);
    });
  }
}
