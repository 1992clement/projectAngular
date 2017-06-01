import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { WeatherComponent } from './weather/weather.component';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';


// History
import { SearchHistoryService } from './search-history/search-history.service';
import { SearchHistoryListComponent } from './search-history/search-history-list/search-history-list.component';
import { SearchHistoryCreateComponent } from './search-history/search-history-create/search-history-create.component';
import { SearchHistoryUpdateComponent } from './search-history/search-history-update/search-history-update.component';
import { SearchHistoryDetailComponent } from './search-history/search-history-detail/search-history-detail.component';
import { SearchHistoryComponent } from './search-history/search-history.component';



import { FavorisComponent } from './favoris/favoris.component';

//Search
import { SearchService } from './search.service';
import { SearchArtistComponent } from './search-artist/search-artist.component';
import { SearchArtistEventsComponent } from './search-artist-events/search-artist-events.component';
import { SearchEventWeatherComponent } from './search-event-weather/search-event-weather.component';

import { AuthService } from './auth/auth.service';
import { HomeComponent } from './home/home.component';
import { CallbackComponent } from './callback/callback.component';


@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    FavorisComponent,
    SearchArtistComponent,
    SearchArtistEventsComponent,
    SearchEventWeatherComponent,
    SearchHistoryListComponent,
    SearchHistoryCreateComponent,
    SearchHistoryUpdateComponent,
    SearchHistoryDetailComponent,
    SearchHistoryComponent,
    CallbackComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [AuthService,SearchHistoryService, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
