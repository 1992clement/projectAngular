import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { SearchService } from './search.service';
import { SearchArtistComponent } from './search-artist/search-artist.component';
import { SearchEventsComponent } from './search-events/search-events.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchArtistComponent,
    SearchEventsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'events/:name',
        component: SearchEventsComponent
      }
    ])
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
