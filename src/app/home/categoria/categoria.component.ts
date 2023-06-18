import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { AllProducts } from 'src/app/models/all-products';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent {

  @Input()
  p?: any
}
