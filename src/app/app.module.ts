import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnectionComponent } from './connection/connection.component';
import { FavorisComponent } from './favoris/favoris.component';
import { SearchArtistComponent } from './search-artist/search-artist.component';
import { SearchArtistEventsComponent } from './search-artist-events/search-artist-events.component';
import { SearchEventWeatherComponent } from './search-event-weather/search-event-weather.component';

@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponent,
    ConnectionComponent,
    FavorisComponent,
    SearchArtistComponent,
    SearchArtistEventsComponent,
    SearchEventWeatherComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
