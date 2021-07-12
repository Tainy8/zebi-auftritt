import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormradioComponent } from './formradio.component';

describe('FormradioComponent', () => {
  let component: FormradioComponent;
  let fixture: ComponentFixture<FormradioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormradioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormradioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
