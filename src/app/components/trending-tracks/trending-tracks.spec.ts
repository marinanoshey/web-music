import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingTracks } from './trending-tracks';

describe('TrendingTracks', () => {
  let component: TrendingTracks;
  let fixture: ComponentFixture<TrendingTracks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrendingTracks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendingTracks);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
