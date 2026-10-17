import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mycarcomponent } from './mycarcomponent';

describe('Mycarcomponent', () => {
  let component: Mycarcomponent;
  let fixture: ComponentFixture<Mycarcomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mycarcomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Mycarcomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
