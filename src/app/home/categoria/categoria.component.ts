import { Component, Input, OnInit } from '@angular/core';
import { ServLocaleService } from 'src/app/verifico/serv-locale.service';


@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  @Input()
  p?: any

  veri: boolean = false;

  constructor(private logServ: ServLocaleService) { }

  ngOnInit(): void {
    this.veri = this.logServ.utenteValido;
    console.log("controllo", this.veri);
  }

}
