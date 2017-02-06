/**
 * Created by Srikar on 05-02-2017.
 */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs/add/operator/map";

@Injectable()
export class CatalogService{

  private catalogUrl: string;

  constructor(private _http: Http){
  }

  getCatalog(){
      //this.catalogUrl="https://api.spotify.com/v1/browse/featured-playlists?country=SE×tamp=2015-05-18T06:44:32&offset=0&limit=20";
        this.catalogUrl="https://api.spotify.com/v1/search?query=kanye&offset=0&limit=20&type=artist&market=US";
      //Date.now() / 1000 | 0;
      return this._http.get(this.catalogUrl).map(res => res.json());
  }
}
