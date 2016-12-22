/**
 * Created by Srikar on 23-12-2016.
 */
import {Routes, RouterModule, Router} from '@angular/router';
import {AboutComponent} from "./components/about/about.component";
import {CatalogComponent} from "./components/catalog/catalog.component";
import {SearchComponent} from "./components/search/search.component";

const appRoutes: Routes = [
  {
    path : '',
    component: CatalogComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'search',
    component: SearchComponent
  }
  ]

export const routing = RouterModule.forRoot(appRoutes);
