import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHabitsComponent } from './home-habits.component';

describe('HomeHabitsComponent', () => {
  let component: HomeHabitsComponent;
  let fixture: ComponentFixture<HomeHabitsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeHabitsComponent]
    });
    fixture = TestBed.createComponent(HomeHabitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
