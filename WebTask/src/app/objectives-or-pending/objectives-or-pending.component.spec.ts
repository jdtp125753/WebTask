import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectivesOrPendingComponent } from './objectives-or-pending.component';

describe('ObjectivesOrPendingComponent', () => {
  let component: ObjectivesOrPendingComponent;
  let fixture: ComponentFixture<ObjectivesOrPendingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObjectivesOrPendingComponent]
    });
    fixture = TestBed.createComponent(ObjectivesOrPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
