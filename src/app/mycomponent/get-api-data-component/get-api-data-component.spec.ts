import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetApiDataComponent } from './get-api-data-component';

describe('GetApiDataComponent', () => {
  let component: GetApiDataComponent;
  let fixture: ComponentFixture<GetApiDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetApiDataComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GetApiDataComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
