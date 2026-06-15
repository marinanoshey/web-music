import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingArtist } from './trending-artist';

describe('TrendingArtist', () => {
  let component: TrendingArtist;
  let fixture: ComponentFixture<TrendingArtist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrendingArtist]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendingArtist);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
