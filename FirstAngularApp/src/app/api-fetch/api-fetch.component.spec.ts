import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiFetchComponent } from './api-fetch.component';

describe('ApiFetchComponent', () => {
  let component: ApiFetchComponent;
  let fixture: ComponentFixture<ApiFetchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApiFetchComponent]
    });
    fixture = TestBed.createComponent(ApiFetchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
