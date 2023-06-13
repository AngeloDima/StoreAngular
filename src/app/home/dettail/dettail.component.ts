import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { AllProducts } from 'src/app/models/all-products';

@Component({
  selector: 'app-dettail',
  templateUrl: './dettail.component.html',
  styleUrls: ['./dettail.component.css']
})
export class DettailComponent implements OnInit {
  dettail?: AllProducts;

  constructor(private apiServ: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];

      this.apiServ.getProductById(id).subscribe((prodotto: AllProducts) => {
        this.dettail = prodotto;
        console.log(this.dettail);
      });
    });
  }
}
