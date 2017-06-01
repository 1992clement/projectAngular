import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';

import { SearchHistory }            from '../search-history';
import { SearchHistoryService }     from '../search-history.service';

@Component({
  selector: 'app-search-history-detail',
  templateUrl: './search-history-detail.component.html',
  styleUrls: ['../search-history.component.css']
})
export class SearchHistoryDetailComponent implements OnInit {
    id: number;
    currentSearchHistory: SearchHistory;
    private sub: any;

  constructor(
    private route: ActivatedRoute,
    private searchHistoryService: SearchHistoryService
  ) { }

  ngOnInit() {
    this.getId();
  }

  getId(){
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id'];
       this.currentSearchHistory =  this.searchHistoryService.getOne(this.id);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
