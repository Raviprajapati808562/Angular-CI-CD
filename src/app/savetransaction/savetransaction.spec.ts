import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Savetransaction } from './savetransaction';

describe('Savetransaction', () => {
  let component: Savetransaction;
  let fixture: ComponentFixture<Savetransaction>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Savetransaction],
    }).compileComponents();

    fixture = TestBed.createComponent(Savetransaction);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
