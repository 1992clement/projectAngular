import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router }   from '@angular/router';

import { SearchHistory }            from '../search-history';
import { SearchHistoryService }     from '../search-history.service';

@Component({
  selector: 'app-search-history-update',
  templateUrl: './search-history-update.component.html',
  styleUrls: ['../search-history.component.css']
})
export class SearchHistoryUpdateComponent implements OnInit {
    id: number;
    currentSearchHistory: SearchHistory;
    private sub: any;
    submitted = false;

  constructor(
    private route: ActivatedRoute,

    private searchHistoryService: SearchHistoryService,
    private router: Router
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

  updateSearchHistory(){
    this.searchHistoryService.update(this.id, this.currentSearchHistory);
    this.router.navigate(['/search-history']);
  }

  onSubmit() {
    this.submitted = true;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
