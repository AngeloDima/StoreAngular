import { Component, OnInit } from '@angular/core';
import { AllProducts } from '../models/all-products';
import { DataService } from '../data.service';

@Component({
  selector: 'app-donna',
  templateUrl: './donna.component.html',
  styleUrls: ['./donna.component.css']
})
export class DonnaComponent implements OnInit {

  data: AllProducts[] = []

  constructor(private dataServ: DataService) { }

  ngOnInit(): void {
    this.dataServ.getDonna().subscribe(data => {
      this.data = data;
      console.log(this.data);
    });
  }

}
