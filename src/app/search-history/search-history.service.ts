/*
  This service is used to save the search history of a user in the local storage.
  In this context the id the index of an element in the list.
*/

import { Injectable } from '@angular/core';
import { SearchHistory } from './search-history';

@Injectable()
export class SearchHistoryService {
  localStorageKey = 'search-history';

  constructor() {}

  getAll(){
    let resLocalStorage = JSON.parse(localStorage.getItem(this.localStorageKey));
    if(null === resLocalStorage){
      resLocalStorage = [];
    }
    return resLocalStorage;
  }

  getOne(id: number){
    let listSearchHistories = this.getAll();
    return listSearchHistories[id];
  }

  create(currentSearchHistory: SearchHistory){
    let listSearchHistories = this.getAll();
    listSearchHistories.push(currentSearchHistory);
    localStorage.setItem(this.localStorageKey, JSON.stringify(listSearchHistories));
  }

  update(id: number, currentsearchHistory: SearchHistory){
    let listSearchHistories = this.getAll();
    listSearchHistories[id] = currentsearchHistory;
    localStorage.setItem(this.localStorageKey, JSON.stringify(listSearchHistories));
  }

  delete(id: number){
    let listSearchHistories = this.getAll();
    listSearchHistories.splice(id, 1);
    localStorage.setItem(this.localStorageKey, JSON.stringify(listSearchHistories));
    return listSearchHistories;
  }

}
