import { Component, OnInit } from '@angular/core';
import { ServLocaleService } from '../verifico/serv-locale.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  utenti: any[] = [];
  utenteLoggato: any[] = [];


  ciao: boolean = true;



  constructor(public utenteServ: ServLocaleService) { }

  ngOnInit(): void {
    this.utenteServ.getUtentiLogin().subscribe(utenti => {
      this.utenti = utenti;
      console.log("LISTA UTENTI", this.utenti);
      this.utenteLoggato = this.utenteServ.utenteLoggato;
      console.log("UTENTE LOGGATO", this.utenteLoggato);
    });
  }
}



