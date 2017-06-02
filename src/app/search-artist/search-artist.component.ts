import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {SearchService} from '../search.service';
import {SearchArtistEventsComponent} from '../search-artist-events/search-artist-events.component';
import {Artist} from './artist';

@Component({
    selector: 'app-search-artist',
    templateUrl: './search-artist.component.html',
    styleUrls: ['./search-artist.component.css']
})
export class SearchArtistComponent implements OnInit {

    result: Artist | false;

    constructor(private searchService: SearchService, private router: Router) {
    }

    ngOnInit() {
    }

    searchArtiste(e): void {
        if (e.target.value !== '') {
            this.searchService.getArtiste(e.target.value)
                .then(data => this.handleData(data));
        }

    }

    handleData(data: Artist): void {
        try {
            this.result = data;
        }catch (e) {
            this.result = false;
        }
    }

    goToEvents(name: string): void {
        this.router.navigate(['/artist/' + name + '/events']);
    }

}
