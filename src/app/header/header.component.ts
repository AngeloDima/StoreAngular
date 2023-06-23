import { Component, OnInit } from '@angular/core';
import { ServLocaleService } from '../verifico/serv-locale.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  utenti: any[] = [];
  utenteLoggato: any[] = []


  constructor(public utenteServ: ServLocaleService) {
    this.utenteServ.getUtentiLogin().subscribe(utenti => {
      this.utenti = utenti;
      console.log("LISTA UTENTI", this.utenti);
    });
  }

}
