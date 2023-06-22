import { CanActivateFn, Router } from '@angular/router';
import { ServLocaleService } from './serv-locale.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {


  const logServ = inject(ServLocaleService)
  const router = inject(Router)



  if (logServ.utenteValido) {
    console.log("utente verificato");
    return true


  } else {
    return router.navigate(['/'])
  }
};



