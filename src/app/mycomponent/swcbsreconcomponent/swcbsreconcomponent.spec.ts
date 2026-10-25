import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Swcbsreconcomponent } from './swcbsreconcomponent';

describe('Swcbsreconcomponent', () => {
  let component: Swcbsreconcomponent;
  let fixture: ComponentFixture<Swcbsreconcomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Swcbsreconcomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Swcbsreconcomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
