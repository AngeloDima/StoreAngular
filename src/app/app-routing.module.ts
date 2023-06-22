import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DettailComponent } from './home/dettail/dettail.component';
import { ElettronicaComponent } from './elettronica/elettronica.component';
import { GioielliComponent } from './gioielli/gioielli.component';
import { UomoComponent } from './uomo/uomo.component';
import { DonnaComponent } from './donna/donna.component';
import { LoginComponent } from './verifico/login/login.component';
import { authGuard } from './verifico/auth.guard';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "products/:id", component: DettailComponent },

  //ROUTE CATEGORIE
  { path: "elettronica", component: ElettronicaComponent, canActivate: [authGuard] },
  { path: "gioielli", component: GioielliComponent },
  { path: "uomo", component: UomoComponent },
  { path: "donna", component: DonnaComponent },

  //LOGIN
  { path: "login", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
