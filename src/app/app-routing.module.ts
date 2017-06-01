import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

// SearchHistory
import {SearchHistoryComponent}       from './search-history/search-history.component';
import {SearchHistoryListComponent}   from './search-history/search-history-list/search-history-list.component';
import {SearchHistoryCreateComponent} from './search-history/search-history-create/search-history-create.component';
import {SearchHistoryUpdateComponent} from './search-history/search-history-update/search-history-update.component';
import {SearchHistoryDetailComponent} from './search-history/search-history-detail/search-history-detail.component';
import {AppComponent} from './app.component';
import {InscriptionComponent} from './inscription/inscription.component';
import {ConnectionComponent} from './connection/connection.component';
import {FavorisComponent} from './favoris/favoris.component';
import {SearchArtistComponent} from './search-artist/search-artist.component';
import {SearchArtistEventsComponent} from './search-artist-events/search-artist-events.component';
import {WeatherComponent} from './weather/weather.component';


const routes: Routes = [

    {path: '', redirectTo: '/', pathMatch: 'full'},
    {
        path: 'connection',
        component: ConnectionComponent
    },
    {
        path: 'inscription',
        component: InscriptionComponent
    },
    {
        path: 'artist/:name',
        component: SearchArtistComponent
    },
    {
        path: 'artist/:name/events',
        component: SearchArtistEventsComponent
    },
    {
        path: 'artist/:name/:event/weather',
        component: WeatherComponent
    },
    {
        path: 'favoris/',
        component: FavorisComponent
    },
    {
        path: 'search-history', component: SearchHistoryComponent,
        children: [
            {path: '', component: SearchHistoryListComponent},
            {path: 'create', component: SearchHistoryCreateComponent},
            {path: 'update/:id', component: SearchHistoryUpdateComponent},
            {path: 'detail/:id', component: SearchHistoryDetailComponent},
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
}

