import { Component, NgModule } from '@angular/core';
import {Router} from '@angular/router';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
import { AuthService } from './auth/auth.service';

import { SearchHistory } from './search-history/search-history';
import { SearchHistoryService } from './search-history/search-history.service';

@NgModule({
  imports: [MdButtonModule, MdCheckboxModule],
})

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private router: Router,
    private searchHistory: SearchHistoryService,
    public auth: AuthService
  ) { 
    auth.handleAuthentication();
  }

  /**
  * Permet de rechercher un artiste. Redirige sur le component qui display l'identité.
  * Param : event change contenant le nom de l'artiste
  */
  goToArtist(e):void{
    let artistName = e.target.value;
    if(artistName !== ""){
    
      let currentSearchHistory = new SearchHistory(
        artistName
      );
      this.searchHistory.create(currentSearchHistory);
      this.router.navigate(['/artist/' + artistName]);
    }
  }

}
