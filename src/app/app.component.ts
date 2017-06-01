import { Component, NgModule } from '@angular/core';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
import { AuthService } from './auth/auth.service';

import { SearchArtistComponent} from './search-artist/search-artist.component';

import { SearchArtistComponent} from './search-artist/search-artist.component';

@NgModule({
  imports: [MdButtonModule, MdCheckboxModule],
})

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public auth: AuthService) {
    auth.handleAuthentication();
  }
}
