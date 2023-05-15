import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDailyListComponent } from './home-daily-list.component';

describe('HomeDailyListComponent', () => {
  let component: HomeDailyListComponent;
  let fixture: ComponentFixture<HomeDailyListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeDailyListComponent]
    });
    fixture = TestBed.createComponent(HomeDailyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
