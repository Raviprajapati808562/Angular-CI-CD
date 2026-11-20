import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aichatcomponent } from './aichatcomponent';

describe('Aichatcomponent', () => {
  let component: Aichatcomponent;
  let fixture: ComponentFixture<Aichatcomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aichatcomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Aichatcomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
