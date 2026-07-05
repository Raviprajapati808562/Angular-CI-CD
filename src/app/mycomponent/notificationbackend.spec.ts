import { TestBed } from '@angular/core/testing';

import { Notificationbackend } from './notificationbackend';

describe('Notificationbackend', () => {
  let service: Notificationbackend;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Notificationbackend);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
