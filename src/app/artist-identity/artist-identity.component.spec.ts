import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistIdentityComponent } from './artist-identity.component';

describe('ArtistIdentityComponent', () => {
  let component: ArtistIdentityComponent;
  let fixture: ComponentFixture<ArtistIdentityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistIdentityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistIdentityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
