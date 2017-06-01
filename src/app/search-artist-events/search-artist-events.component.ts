import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../search.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { WeatherComponent } from '../weather/weather.component';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-search-artist-events',
  templateUrl: './search-artist-events.component.html',
  styleUrls: ['./search-artist-events.component.css']
})
export class SearchArtistEventsComponent implements OnInit {
  name = "";

  constructor(
  	private searchService: SearchService,
  	private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {
    this.name = this.route.params['name'];
  	this.route.params
    .switchMap((params: Params) => this.searchService.getEvents(params['name']))
    .subscribe(data => this.events = data.json() as object[]);
  }
  events:object[];

  /**
   * Go to the weather page with params
   * @param name
   * @param city
   * @param date
   */
  goToWeather(name:string, city:string, date:string):void{
    this.router.navigate(['/artist/' + name + '/' + city + '/' + date + '/weather']);
  }

}
