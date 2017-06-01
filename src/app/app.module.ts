import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }                 from './app.component';


// History
import { SearchHistoryService }         from './search-history/search-history.service';
import { SearchHistoryListComponent }   from './search-history/search-history-list/search-history-list.component';
import { SearchHistoryCreateComponent } from './search-history/search-history-create/search-history-create.component';
import { SearchHistoryUpdateComponent } from './search-history/search-history-update/search-history-update.component';
import { SearchHistoryDetailComponent } from './search-history/search-history-detail/search-history-detail.component';
import { SearchHistoryComponent } from './search-history/search-history.component';

// Auth
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
    SearchHistoryListComponent,
    SearchHistoryCreateComponent,
    SearchHistoryUpdateComponent,
    SearchHistoryDetailComponent,
    SearchHistoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [SearchHistoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
