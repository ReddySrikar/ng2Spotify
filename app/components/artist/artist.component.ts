/**
 * Created by Srikar on 26-12-2016.
 */
import {Component, OnInit} from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { artist } from '../search/search.component';
import { ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'artistinfo',
    templateUrl: 'artist.component.html',
    providers: [SpotifyService]
})

export class ArtistComponent implements { artist, OnInit} {
    id: string;
    artist: artist[];
    albums: artist.albums[];

    constructor(private _spotifyService: SpotifyService, private _route: ActivatedRoute){

    }

    ngOnInit(){
        this._route.params
            .map(params => params['id'])
            .subscribe((id) => {
                this._spotifyService.loadArtist(id)
                    .subscribe(artist => {
                        this.artist = artist;
                    })
                this._spotifyService.fetchAlbums(id)
                    .subscribe(albums =>  {
                        this.albums = albums.items;
                    })
            })
    }
}
