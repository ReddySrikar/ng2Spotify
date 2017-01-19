/**
 * Created by Srikar on 22-12-2016.
 */
import { Component } from '@angular/core';
import {SpotifyService} from "../../services/spotify.service";

@Component({
  moduleId: module.id,
  selector: 'search',
  templateUrl: 'search.component.html',
  providers: [SpotifyService]
  })

export class SearchComponent  {
  searchStr: string;
  setArtists: artist[];

  constructor(private _spotifyService: SpotifyService){
  }

  searchArtist(){
    this._spotifyService.searchMusic(this.searchStr)
        .subscribe( res => {
          this.setArtists = res.artists.items;
        })
  }
}

export interface artist{
  id: number;
  name: string;
  genres: any;
  albums: [
    {
      id: number;
    }
  ]
}

