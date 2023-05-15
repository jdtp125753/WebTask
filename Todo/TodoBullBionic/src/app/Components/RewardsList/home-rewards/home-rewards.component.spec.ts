import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRewardsComponent } from './home-rewards.component';

describe('HomeRewardsComponent', () => {
  let component: HomeRewardsComponent;
  let fixture: ComponentFixture<HomeRewardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeRewardsComponent]
    });
    fixture = TestBed.createComponent(HomeRewardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
