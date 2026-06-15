import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicTracks } from './music-tracks';

describe('MusicTracks', () => {
  let component: MusicTracks;
  let fixture: ComponentFixture<MusicTracks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusicTracks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicTracks);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
