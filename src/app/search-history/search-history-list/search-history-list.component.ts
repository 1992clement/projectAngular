import { Component, OnInit } from '@angular/core';
import { Router }   from '@angular/router';
import { Location }                 from '@angular/common';
import { SearchHistory }            from '../search-history';
import { SearchHistoryService }     from '../search-history.service';

@Component({
  selector: 'app-search-history',
  templateUrl: './search-history-list.component.html',
  styleUrls: ['../search-history.component.css']
})
export class SearchHistoryListComponent implements OnInit {
  searchHistories:SearchHistory[];

  constructor(
    private location: Location,
    private router: Router,
    private searchHistoryService: SearchHistoryService
  ) { }

  getSearchHistories(){
    this.searchHistories = this.searchHistoryService.getAll();
  }

  ngOnInit() {
    this.getSearchHistories();
  }

  goBack(): void {
    this.location.back();
  }

  toDetail(id: number){
    this.router.navigate(['/search-history/detail', id]);
  }

  toUpdate(id: number){
    this.router.navigate(['/search-history/update', id]);
  }

  toDelete(id: number){
    let currentSearchHistory = this.searchHistoryService.getOne(id);
     if (confirm("Are you sur you want to delete \""+currentSearchHistory.search+"\" ?")) {
        this.searchHistories = this.searchHistoryService.delete(id);
      }
  }

}
