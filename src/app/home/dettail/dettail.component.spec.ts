import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettailComponent } from './dettail.component';

describe('DettailComponent', () => {
  let component: DettailComponent;
  let fixture: ComponentFixture<DettailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DettailComponent]
    });
    fixture = TestBed.createComponent(DettailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
