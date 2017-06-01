import { Component, NgModule } from '@angular/core';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';

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
  title = 'app works!';
}
