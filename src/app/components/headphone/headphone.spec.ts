import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Headphone } from './headphone';

describe('Headphone', () => {
  let component: Headphone;
  let fixture: ComponentFixture<Headphone>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Headphone]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Headphone);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
