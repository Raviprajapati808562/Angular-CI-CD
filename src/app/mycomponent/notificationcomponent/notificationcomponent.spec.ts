import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Notificationcomponent } from './notificationcomponent';

describe('Notificationcomponent', () => {
  let component: Notificationcomponent;
  let fixture: ComponentFixture<Notificationcomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Notificationcomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Notificationcomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
