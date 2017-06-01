import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnectionComponent } from './connection/connection.component';
import { FavorisComponent } from './favoris/favoris.component';
import { SearchArtistComponent } from './search-artist/search-artist.component';
import { SearchArtistEventsComponent } from './search-artist-events/search-artist-events.component';
import { SearchEventWeatherComponent } from './search-event-weather/search-event-weather.component';


const routes: Routes = [
	{ 
    path: '', 
    component: AppComponent
  },
  { 
    path: '/connection', 
    component: ConnectionComponent
  },
  { 
    path: '/inscription', 
    component: InscriptionComponent
  },
  { 
    path: '/artist/:name', 
    component: SearchArtistComponent
  },
  { 
    path: '/artist/:name/events', 
    component: SearchArtistEventsComponent
  },
  { 
    path: '/artist/:name/:event/weather', 
    component: SearchEventWeatherComponent
  },
  { 
    path: '/favoris/', 
    component: favorisComponent
  }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}