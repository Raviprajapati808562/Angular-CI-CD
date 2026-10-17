import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fileuploadcomponent } from './fileuploadcomponent';

describe('Fileuploadcomponent', () => {
  let component: Fileuploadcomponent;
  let fixture: ComponentFixture<Fileuploadcomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fileuploadcomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Fileuploadcomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
