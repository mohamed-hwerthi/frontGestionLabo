import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComamndesComponent } from './comamndes.component';

describe('ComamndesComponent', () => {
  let component: ComamndesComponent;
  let fixture: ComponentFixture<ComamndesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComamndesComponent]
    });
    fixture = TestBed.createComponent(ComamndesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
