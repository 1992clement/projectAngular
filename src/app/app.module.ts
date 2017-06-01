import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }                 from './app.component';

// search-history
import { SearchHistoryService }         from './search-history/search-history.service';
import { SearchHistoryListComponent }   from './search-history/search-history-list/search-history-list.component';
import { SearchHistoryCreateComponent } from './search-history/search-history-create/search-history-create.component';
import { SearchHistoryUpdateComponent } from './search-history/search-history-update/search-history-update.component';
import { SearchHistoryDetailComponent } from './search-history/search-history-detail/search-history-detail.component';
import { SearchHistoryComponent } from './search-history/search-history.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    SearchHistoryListComponent,
    SearchHistoryCreateComponent,
    SearchHistoryUpdateComponent,
    SearchHistoryDetailComponent,
    SearchHistoryComponent
  ],
  providers: [SearchHistoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
