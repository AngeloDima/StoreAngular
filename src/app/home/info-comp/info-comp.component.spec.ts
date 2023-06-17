import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCompComponent } from './info-comp.component';

describe('InfoCompComponent', () => {
  let component: InfoCompComponent;
  let fixture: ComponentFixture<InfoCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoCompComponent]
    });
    fixture = TestBed.createComponent(InfoCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
