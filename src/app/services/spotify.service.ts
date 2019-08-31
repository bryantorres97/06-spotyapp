import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  private getQuery( query: string ) {
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQD0Koz7hnTX6p2jpgdRNpZ4E7Mj0OgVtpIwM1ccb4AMO2H6ga733XRwTX0MTssYoorAc6J0T9oPgJzcRpg'
    });

    return this.http.get(url, {headers});
  }

  getNewReleases() {
    // tslint:disable-next-line: no-string-literal
    return this.getQuery('browse/new-releases?country=ES&limit=20').pipe(map(data => data['albums'].items));
  }

  getArtists(termino: string) {
    // tslint:disable-next-line: no-string-literal
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(map(data => data['artists'].items));
  }

  getArtist(id: string) {
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id: string) {
    // tslint:disable-next-line: no-string-literal
    return this.getQuery(`artists/${id}/top-tracks?country=es`).pipe(map(data => data['tracks']));
  }

}

