import { Component, OnInit } from '@angular/core';
import { ServLocaleService } from '../serv-locale.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  utenti: string[] = []

  constructor(private uteAuth: ServLocaleService) { }
  ngOnInit(): void {
    this.uteAuth.getUtentiLogin().subscribe(utente => {
      this.utenti = utente
      console.log(this.utenti);

    })
  }


  onVerifico() {

  }

}
