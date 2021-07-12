import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KlassendropdownComponent } from './klassendropdown.component';

describe('KlassendropdownComponent', () => {
  let component: KlassendropdownComponent;
  let fixture: ComponentFixture<KlassendropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KlassendropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KlassendropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
