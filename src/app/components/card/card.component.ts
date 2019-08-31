import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() items: any[] = [];
  constructor(private router: Router) { }

  ngOnInit() {
  }

  seeArtist(item: any) {
    console.log(item);
    let artistId: string;
    if (item.type === 'artist') {
      artistId = item.id;
    } else {
      artistId = item.artists[0].id;
    }
    this.router.navigate(['/artist', artistId]);
  }

}
