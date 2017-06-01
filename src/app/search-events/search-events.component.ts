import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from '../search.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-search-events',
  templateUrl: './search-events.component.html',
  styleUrls: ['./search-events.component.css']
})
export class SearchEventsComponent implements OnInit {

  constructor(
  	private searchService: SearchService,
  	private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
  	this.route.params
    .switchMap((params: Params) => this.searchService.getEvents(params['name']))
    .subscribe(data => this.events = data.json() as object[]);
  }
  events:object[];
}
