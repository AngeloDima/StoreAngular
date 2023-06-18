import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';

import { DettailComponent } from './home/dettail/dettail.component';
import { HeaderComponent } from './header/header.component';
import { CategoriaComponent } from './home/categoria/categoria.component';
import { MegaBannerComponent } from './home/mega-banner/mega-banner.component';
import { InfoCompComponent } from './home/info-comp/info-comp.component';
import { PopolariComponent } from './home/popolari/popolari.component';
import { FooterComponent } from './footer/footer.component';
import { ElettronicaComponent } from './elettronica/elettronica.component';
import { GioielliComponent } from './gioielli/gioielli.component';
import { UomoComponent } from './uomo/uomo.component';
import { DonnaComponent } from './donna/donna.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DettailComponent,
    HeaderComponent,
    CategoriaComponent,
    MegaBannerComponent,
    InfoCompComponent,
    PopolariComponent,
    FooterComponent,
    ElettronicaComponent,
    GioielliComponent,
    UomoComponent,
    DonnaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
