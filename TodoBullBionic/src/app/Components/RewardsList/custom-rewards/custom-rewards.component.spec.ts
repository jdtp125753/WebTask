import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomRewardsComponent } from './custom-rewards.component';

describe('CustomRewardsComponent', () => {
  let component: CustomRewardsComponent;
  let fixture: ComponentFixture<CustomRewardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomRewardsComponent]
    });
    fixture = TestBed.createComponent(CustomRewardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
