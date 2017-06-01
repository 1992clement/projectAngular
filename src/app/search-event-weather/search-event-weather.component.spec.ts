import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchEventWeatherComponent } from './search-event-weather.component';

describe('SearchEventWeatherComponent', () => {
  let component: SearchEventWeatherComponent;
  let fixture: ComponentFixture<SearchEventWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchEventWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchEventWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
