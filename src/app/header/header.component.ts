import { Component } from '@angular/core';
import { ServLocaleService } from '../verifico/serv-locale.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  utenti: any[] = [];

  constructor(private utenteServ: ServLocaleService) {
    this.utenteServ.getUtentiLogin().subscribe(utenti => {
      this.utenti = utenti;
    });
  }
}
