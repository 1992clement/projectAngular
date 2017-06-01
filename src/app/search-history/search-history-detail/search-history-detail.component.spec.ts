import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchHistoryDetailComponent } from './search-history-detail.component';

describe('SearchHistoryDetailComponent', () => {
  let component: SearchHistoryDetailComponent;
  let fixture: ComponentFixture<SearchHistoryDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchHistoryDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchHistoryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
