import { Component, OnInit } from '@angular/core';
import { ServLocaleService } from '../serv-locale.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  utenti: any[] = [];

  constructor(private uteAuth: ServLocaleService) { }

  ngOnInit(): void {
    this.uteAuth.getUtentiLogin().subscribe(utenti => {
      this.utenti = utenti;
      // console.log("utenti verificati", this.utenti);
    });
  }

  nome: string = "";
  password: string = "";

  onVerifico(nome: string, password: string) {
    this.uteAuth.login(nome, password);
  }
}
