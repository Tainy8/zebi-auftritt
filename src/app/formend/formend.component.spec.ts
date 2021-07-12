import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormendComponent } from './formend.component';

describe('FormendComponent', () => {
  let component: FormendComponent;
  let fixture: ComponentFixture<FormendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
