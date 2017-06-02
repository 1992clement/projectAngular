import { Injectable } from '@angular/core';
import { Favorites } from './favorites';

@Injectable()
export class FavoritesService {

  localStorageKey = 'favorites';

  constructor() {}

  getAll(){
    let resLocalStorage = JSON.parse(localStorage.getItem(this.localStorageKey));
    if(null === resLocalStorage){
      resLocalStorage = [];
    }
    return resLocalStorage;
  }

  getOne(id: number){
    let listFavorites = this.getAll();
    return listFavorites[id];
  }

  eventFavorites(currentFavorites: Favorites){
  	return this.create(currentFavorites);
  }

  create(currentFavorites: Favorites){
    let listFavorites = this.getAll();
    let exists = this.checkIfExists(currentFavorites);
    if(-1 !== exists){
    	listFavorites = this.delete(exists);
    }else{
    	listFavorites.push(currentFavorites);
    }
    localStorage.setItem(this.localStorageKey, JSON.stringify(listFavorites));
    return listFavorites;
  }

  update(id: number, currentFavorites: Favorites){
    let listFavorites = this.getAll();
    listFavorites[id] = currentFavorites;
    localStorage.setItem(this.localStorageKey, JSON.stringify(listFavorites));
  }

  delete(id: number){
    let listFavorites = this.getAll();
    listFavorites.splice(id, 1);
    localStorage.setItem(this.localStorageKey, JSON.stringify(listFavorites));
    return listFavorites;
  }

  checkIfExists(currentFavorites: Favorites){
  	let listFavorites = this.getAll();
  	let found = -1;
  	for (let i = 0; i < listFavorites.length; i++) {
  		if(listFavorites[i].artiste == currentFavorites.artiste && listFavorites[i].date == currentFavorites.date){
  			found =  i;
  		}
  	}
  	return found;
  }

}
