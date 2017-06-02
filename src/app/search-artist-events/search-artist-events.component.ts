import {Component, OnInit, Input} from '@angular/core';
import {Router} from '@angular/router';
import {SearchService} from '../search.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';

import {WeatherComponent} from '../weather/weather.component';
import 'rxjs/add/operator/switchMap';
import {ArtistEvent} from './event';
import {ArtistIdentityComponent} from '../artist-identity/artist-identity.component';

import { Favorites }            from '../favorites/favorites';
import { FavoritesService }     from '../favorites/favorites.service';

@Component({
    selector: 'app-search-artist-events',
    templateUrl: './search-artist-events.component.html',
    styleUrls: ['./search-artist-events.component.css']
})
export class SearchArtistEventsComponent implements OnInit {
    name = '';
    events: ArtistEvent[];


  constructor(
  	private searchService: SearchService,
  	private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private favoritesService: FavoritesService
  ) { }

  ngOnInit() {
    this.name = this.route.snapshot.params['name'];
  	 this.route.params
            .switchMap((params: Params) => this.searchService.getEvents(params['name']))
            .subscribe(data => this.events = data);
  }

    /**
     * Go to the weather page with params
     * @param name
     * @param city
     * @param date
     */
    goToWeather(name: string, city: string, date: string): void {
        this.router.navigate(['/artist/' + name + '/' + city + '/' + date + '/weather']);
    }

  addToFavorites(artiste: string, city: string, country: string, venue: string, date: string){
    this.name = this.route.snapshot.params['name'];
    let photo = JSON.parse(localStorage.getItem('last_picture'));
    let currentFavorites = new Favorites(
      this.name,
      photo,
      city,
      country,
      venue,
      date
    );
    this.favoritesService.create(currentFavorites);
  }

  isFavorites(artiste: string, date:string){
    let currentFavorites = new Favorites(
      artiste,
      '',
      '',
      '',
      '',
      date
    );
    let exists = this.favoritesService.checkIfExists(currentFavorites);
    if(-1 === exists){
      return false;
    }else{
      return true;
    }
  }

}
