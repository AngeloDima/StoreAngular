import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElettronicaComponent } from './elettronica.component';

describe('ElettronicaComponent', () => {
  let component: ElettronicaComponent;
  let fixture: ComponentFixture<ElettronicaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElettronicaComponent]
    });
    fixture = TestBed.createComponent(ElettronicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
