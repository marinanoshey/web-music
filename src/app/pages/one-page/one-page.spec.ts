import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnePage } from './one-page';

describe('OnePage', () => {
  let component: OnePage;
  let fixture: ComponentFixture<OnePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnePage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
