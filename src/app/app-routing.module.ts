import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DettailComponent } from './home/dettail/dettail.component';
import { ElettronicaComponent } from './elettronica/elettronica.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "products/:id", component: DettailComponent },
  { path: ":category", component: ElettronicaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
