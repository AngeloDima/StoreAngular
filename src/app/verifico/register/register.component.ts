import { Component } from '@angular/core';
import { ServLocaleService } from '../serv-locale.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  id: number = 0
  nomeReg: string = ""
  passwordReg: string = ""

  constructor(private verServ: ServLocaleService) { }

  addUtente(id: number, nomeReg: string, passwordReg: string) {
    this.verServ.register(id, nomeReg, passwordReg)
  }

}


