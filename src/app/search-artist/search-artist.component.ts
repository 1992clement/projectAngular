import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../search.service';
import { SearchEventsComponent } from '../search-events/search-events.component';

@Component({
  selector: 'app-search-artist',
  templateUrl: './search-artist.component.html',
  styleUrls: ['./search-artist.component.css']
})
export class SearchArtistComponent implements OnInit {

  constructor(private searchService: SearchService, private router: Router,) { }

  ngOnInit() {
  }
  
  result:any; 

  searchArtiste(e):void{
  	if(e.target.value !== ""){
  	  this.searchService.getArtiste(e.target.value)
  	      .then(data => this.handleData(data));
  	}
  	
  }

  handleData(data:any):void {
    try {
      this.result = data.json() as object;
    }
    catch (e){
      this.result = false;
    }
  }

  goToEvents(name:string):void{
    this.router.navigate(['/events', name]);
  }

}
