import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JustinBeiber } from './justin-beiber';

describe('JustinBeiber', () => {
  let component: JustinBeiber;
  let fixture: ComponentFixture<JustinBeiber>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JustinBeiber]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JustinBeiber);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
