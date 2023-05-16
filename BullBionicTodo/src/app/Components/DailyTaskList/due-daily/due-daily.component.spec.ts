import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DueDailyComponent } from './due-daily.component';

describe('DueDailyComponent', () => {
  let component: DueDailyComponent;
  let fixture: ComponentFixture<DueDailyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DueDailyComponent]
    });
    fixture = TestBed.createComponent(DueDailyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
