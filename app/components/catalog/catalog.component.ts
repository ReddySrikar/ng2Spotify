/**
 * Created by Srikar on 22-12-2016.
 */
import { Component } from '@angular/core';
import { CatalogService } from '../../services/catalog.service';
import { artist } from '../search/search.component';

import { OnInit } from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'catalog',
  templateUrl: `catalog.component.html`,
  providers: [CatalogService]
})

export class CatalogComponent  {

  artist: artist[];
  constructor(private _catalogService: CatalogService){
  }

  ngOnInit() {
      this._catalogService.getCatalog().subscribe(res => { console.log(res.artists.items)})
  }
}

