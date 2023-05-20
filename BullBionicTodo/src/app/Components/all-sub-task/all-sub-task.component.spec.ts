import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSubTaskComponent } from './all-sub-task.component';

describe('AllSubTaskComponent', () => {
  let component: AllSubTaskComponent;
  let fixture: ComponentFixture<AllSubTaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllSubTaskComponent]
    });
    fixture = TestBed.createComponent(AllSubTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
