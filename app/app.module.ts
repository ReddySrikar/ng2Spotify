import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {AboutComponent} from "./components/about/about.component";
import {CatalogComponent} from "./components/catalog/catalog.component";

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, AboutComponent, CatalogComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
