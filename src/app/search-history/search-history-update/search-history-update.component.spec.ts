import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchHistoryUpdateComponent } from './search-history-update.component';

describe('SearchHistoryUpdateComponent', () => {
  let component: SearchHistoryUpdateComponent;
  let fixture: ComponentFixture<SearchHistoryUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchHistoryUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchHistoryUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
