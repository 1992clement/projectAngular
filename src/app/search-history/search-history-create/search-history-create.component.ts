import { Component, OnInit } from '@angular/core';
import { Router }   from '@angular/router';

import { SearchHistory }            from '../search-history';
import { SearchHistoryService }     from '../search-history.service';

@Component({
  selector: 'app-search-history-create',
  templateUrl: './search-history-create.component.html',
  styleUrls: ['../search-history.component.css']
})

export class SearchHistoryCreateComponent implements OnInit {
  submitted = false;
  currentSearchHistory = new SearchHistory('Specify a value');

  ngOnInit() {
  }

  constructor(
    private searchHistoryService: SearchHistoryService,
    private router: Router
  ) { }

  onSubmit() {
    this.submitted = true;
  }

  createSearchHistory() {
    this.searchHistoryService.create(this.currentSearchHistory);
    this.router.navigate(['/search-history']);
  }

}
