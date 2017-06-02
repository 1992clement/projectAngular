import {Injectable} from '@angular/core';
import {Favorites} from './favorites';

@Injectable()
export class FavoritesService {

    localStorageKey = 'favorites';

    constructor() {
    }

    /**
     * Get all favorites event saved in local storage
     * @return {any}
     */
    getAll() {
        let resLocalStorage = JSON.parse(localStorage.getItem(this.localStorageKey));
        if (null === resLocalStorage) {
            resLocalStorage = [];
        }
        return resLocalStorage;
    }

    /**
     * Get one specific event from the local storage by ID
     * @param id
     * @return {any}
     */
    getOne(id: number) {
        const listFavorites = this.getAll();
        return listFavorites[id];
    }

    /**
     *  Alias for create method
     * @param currentFavorites
     * @return {any}
     */
    eventFavorites(currentFavorites: Favorites) {
        return this.create(currentFavorites);
    }

    /**
     * Save favorite into local storage
     * @param currentFavorites
     * @return {any}
     */
    create(currentFavorites: Favorites) {
        let listFavorites = this.getAll();
        const exists = this.checkIfExists(currentFavorites);
        if (-1 !== exists) {
            listFavorites = this.delete(exists);
        } else {
            listFavorites.push(currentFavorites);
            console.log('push');
        }
        localStorage.setItem(this.localStorageKey, JSON.stringify(listFavorites));
        return listFavorites;
    }

    /**
     * Update favorite from local storage
     * @param id
     * @param currentFavorites
     */
    update(id: number, currentFavorites: Favorites) {
        const listFavorites = this.getAll();
        listFavorites[id] = currentFavorites;
        localStorage.setItem(this.localStorageKey, JSON.stringify(listFavorites));
    }

    /**
     * destroy favorite from local storage
     * @param id
     * @param currentFavorites
     */
    delete(id: number) {
        const listFavorites = this.getAll();
        listFavorites.splice(id, 1);
        localStorage.setItem(this.localStorageKey, JSON.stringify(listFavorites));
        return listFavorites;
    }

    /**
     * Return if the specified favorite is present into localstorage
     * @param currentFavorites
     * @return {number}
     */
    checkIfExists(currentFavorites: Favorites): number {
        const listFavorites = this.getAll();
        let found = -1;
        for (let i = 0; i < listFavorites.length; i++) {
            console.log(listFavorites[i].artiste, currentFavorites.artiste, listFavorites[i].date, currentFavorites.date)
            if (listFavorites[i].artiste === currentFavorites.artiste && listFavorites[i].date === currentFavorites.date) {
                console.log('exists');
                found = i;
            }
        }
        return found;
    }

}
