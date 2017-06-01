import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchArtistEventsComponent } from './search-artist-events.component';

describe('SearchArtistEventsComponent', () => {
  let component: SearchArtistEventsComponent;
  let fixture: ComponentFixture<SearchArtistEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchArtistEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchArtistEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
