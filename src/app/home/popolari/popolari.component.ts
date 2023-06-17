import { Component, Input } from '@angular/core';
import { AllProducts } from 'src/app/models/all-products';

@Component({
  selector: 'app-popolari',
  templateUrl: './popolari.component.html',
  styleUrls: ['./popolari.component.css']
})
export class PopolariComponent {

  @Input()
  p?: AllProducts

}


