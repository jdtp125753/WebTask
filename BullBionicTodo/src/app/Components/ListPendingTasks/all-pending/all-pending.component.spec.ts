import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPendingComponent } from './all-pending.component';

describe('AllPendingComponent', () => {
  let component: AllPendingComponent;
  let fixture: ComponentFixture<AllPendingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllPendingComponent]
    });
    fixture = TestBed.createComponent(AllPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
