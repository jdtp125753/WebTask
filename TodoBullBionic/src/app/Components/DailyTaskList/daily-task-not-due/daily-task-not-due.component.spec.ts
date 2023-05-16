import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyTaskNotDueComponent } from './daily-task-not-due.component';

describe('DailyTaskNotDueComponent', () => {
  let component: DailyTaskNotDueComponent;
  let fixture: ComponentFixture<DailyTaskNotDueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DailyTaskNotDueComponent]
    });
    fixture = TestBed.createComponent(DailyTaskNotDueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
