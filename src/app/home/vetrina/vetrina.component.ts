import { Component, Input } from '@angular/core';
import { AllProducts } from 'src/app/models/all-products';

@Component({
  selector: 'app-vetrina',
  templateUrl: './vetrina.component.html',
  styleUrls: ['./vetrina.component.css']
})
export class VetrinaComponent {
  @Input()
  p?: AllProducts;
}
