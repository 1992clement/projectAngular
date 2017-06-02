import {Component, OnInit, Input} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import {Artist} from '../artist';
import {SearchService} from '../search.service';
import {SearchArtistEventsComponent} from '../search-artist-events/search-artist-events.component';


@Component({
    selector: 'app-artist-identity',
    templateUrl: './artist-identity.component.html',
    styleUrls: ['./artist-identity.component.css']
})
export class ArtistIdentityComponent implements OnInit {
    @Input() displayButton = true;
    artist: Artist | false;

    constructor(private searchService: SearchService,
                private route: ActivatedRoute,
                private router: Router) {
    }

    ngOnInit() {
        const artistName = this.route.snapshot.params['name'];
        this.searchService.getArtiste(artistName)
            .then(data => this.handleData(data));
    }

    handleData(data: Artist): void {
        try {
            this.artist = data;
        } catch (e) {
            this.artist = false;
        }
    }

    goToEvents(name: string, photo_url: string): void {

        localStorage.setItem('last_picture', JSON.stringify(photo_url));
        this.router.navigate(['/artist/' + name + '/events']);
    }
}
