import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeakHabitsComponent } from './weak-habits.component';

describe('WeakHabitsComponent', () => {
  let component: WeakHabitsComponent;
  let fixture: ComponentFixture<WeakHabitsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeakHabitsComponent]
    });
    fixture = TestBed.createComponent(WeakHabitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
