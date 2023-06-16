import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';

import { DettailComponent } from './home/dettail/dettail.component';
import { HeaderComponent } from './header/header.component';
import { CategoriaComponent } from './home/categoria/categoria.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DettailComponent,
    HeaderComponent,
    CategoriaComponent
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
