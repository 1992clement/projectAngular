import {Component, OnInit} from '@angular/core';
import {Favorites} from './favorites';
import {FavoritesService} from './favorites.service';

@Component({
    selector: 'app-favorites',
    templateUrl: './favorites.component.html',
    styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
    userFavorites: Favorites[];

    constructor(private favoriteService: FavoritesService) {
    }

    ngOnInit() {
        this.userFavorites = this.favoriteService.getAll();
        console.log(this.userFavorites);
    }

}
