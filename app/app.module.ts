import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routes'

import { AppComponent }  from './app.component';
import {AboutComponent} from "./components/about/about.component";
import {CatalogComponent} from "./components/catalog/catalog.component";
import {SearchComponent} from "./components/search/search.component";

@NgModule({
  imports:      [ BrowserModule, routing ],
  declarations: [ AppComponent, AboutComponent, CatalogComponent, SearchComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
