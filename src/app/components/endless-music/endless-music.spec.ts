import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndlessMusic } from './endless-music';

describe('EndlessMusic', () => {
  let component: EndlessMusic;
  let fixture: ComponentFixture<EndlessMusic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EndlessMusic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EndlessMusic);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
