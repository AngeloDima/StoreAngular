import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GioielliComponent } from './gioielli.component';

describe('GioielliComponent', () => {
  let component: GioielliComponent;
  let fixture: ComponentFixture<GioielliComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GioielliComponent]
    });
    fixture = TestBed.createComponent(GioielliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
