import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  artists: any[] = [];
  loading: boolean;

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
  }

  buscar( termino: string) {
    this.loading = true;
    this.spotifyService.getArtists(termino).subscribe((data: any) => {
      // console.log(data);
      this.artists = data;
      this.loading = false;
    });
  }

}
