/**
 * Created by Srikar on 21-01-2017.
 */
import { Component } from "@angular/core";
import { ActivatedRoute} from '@angular/router';
import { artist } from '../search/search.component';
import { SpotifyService } from "../../services/spotify.service";

@Component({
    moduleId: module.id,
    selector: 'album',
    templateUrl: 'album.component.html',
    providers: [SpotifyService]
})
export class AlbumComponent{
    id: string;
    album: album[];
    constructor(private _spotifyService: SpotifyService, private _route: ActivatedRoute){
    }

    ngOnInit(){
      this._route.params
        .map(params => params['id'])
        .subscribe((id) => this._spotifyService.getAlbum(id)
          .subscribe(album => {this.album = album}))
    }
}
