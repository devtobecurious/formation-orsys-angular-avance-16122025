import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Selfies } from './selfies';

describe('Selfies', () => {
  let component: Selfies;
  let fixture: ComponentFixture<Selfies>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Selfies]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Selfies);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
