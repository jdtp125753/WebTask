import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduledPendingComponent } from './scheduled-pending.component';

describe('ScheduledPendingComponent', () => {
  let component: ScheduledPendingComponent;
  let fixture: ComponentFixture<ScheduledPendingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduledPendingComponent]
    });
    fixture = TestBed.createComponent(ScheduledPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
