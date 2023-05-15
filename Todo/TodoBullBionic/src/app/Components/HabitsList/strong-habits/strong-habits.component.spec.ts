import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrongHabitsComponent } from './strong-habits.component';

describe('StrongHabitsComponent', () => {
  let component: StrongHabitsComponent;
  let fixture: ComponentFixture<StrongHabitsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StrongHabitsComponent]
    });
    fixture = TestBed.createComponent(StrongHabitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
