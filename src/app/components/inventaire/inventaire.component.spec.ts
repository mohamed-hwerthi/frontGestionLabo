import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventaireComponent } from './inventaire.component';

describe('InventaireComponent', () => {
  let component: InventaireComponent;
  let fixture: ComponentFixture<InventaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InventaireComponent]
    });
    fixture = TestBed.createComponent(InventaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
