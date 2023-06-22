import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ServLocaleService } from 'src/app/verifico/serv-locale.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnChanges {
  @Input()
  p?: any; //dati di
  veri: boolean = false;

  constructor(private logServ: ServLocaleService) {
    this.veri = this.logServ.utenteValido;
    console.log("controllo", this.veri);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['p'] && this.p !== undefined) {
      this.veri = this.logServ.utenteValido;
    }
  }

}



