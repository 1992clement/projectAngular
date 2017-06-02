import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {SearchService} from '../search.service';
import {SearchArtistEventsComponent} from '../search-artist-events/search-artist-events.component';
import {Artist} from './artist';

import { SearchHistory } from '../search-history/search-history';
import { SearchHistoryService } from '../search-history/search-history.service';


@Component({
    selector: 'app-search-artist',
    templateUrl: './search-artist.component.html',
    styleUrls: ['./search-artist.component.css']
})
export class SearchArtistComponent implements OnInit {
  displayEvent: boolean = false;
  result: Artist | false;

  constructor(
    private searchService: SearchService,
    private router: Router,
    private searchHistory: SearchHistoryService
  ) { }

  ngOnInit() {
  }
  
  
  searchArtiste(e):void{
    let artistName = e.target.value;
    let currentSearchHistory = new SearchHistory(
      artistName
    );
    this.searchHistory.create(currentSearchHistory);
  	if(e.target.value !== ""){

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
    

  goToEvents(name:string, photo_url:string):void{
    localStorage.setItem('last_picture', JSON.stringify(photo_url));
    this.router.navigate(['/artist/' + name + '/events']);
  }

}
