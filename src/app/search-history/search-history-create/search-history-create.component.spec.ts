import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchHistoryCreateComponent } from './search-history-create.component';

describe('SearchHistoryCreateComponent', () => {
  let component: SearchHistoryCreateComponent;
  let fixture: ComponentFixture<SearchHistoryCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchHistoryCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchHistoryCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
