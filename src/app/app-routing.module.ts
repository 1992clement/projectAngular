import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// SearchHistory
import { SearchHistoryComponent }       from './search-history/search-history.component';
import { SearchHistoryListComponent }   from './search-history/search-history-list/search-history-list.component';
import { SearchHistoryCreateComponent } from './search-history/search-history-create/search-history-create.component';
import { SearchHistoryUpdateComponent } from './search-history/search-history-update/search-history-update.component';
import { SearchHistoryDetailComponent } from './search-history/search-history-detail/search-history-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'search-history',  component: SearchHistoryComponent,
      children: [
        { path: '',           component: SearchHistoryListComponent },
        { path: 'create',     component: SearchHistoryCreateComponent },
        { path: 'update/:id', component: SearchHistoryUpdateComponent },
        { path: 'detail/:id', component: SearchHistoryDetailComponent },
      ]
   }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
