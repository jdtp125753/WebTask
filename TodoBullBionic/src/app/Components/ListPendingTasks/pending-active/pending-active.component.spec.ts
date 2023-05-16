import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingActiveComponent } from './pending-active.component';

describe('PendingActiveComponent', () => {
  let component: PendingActiveComponent;
  let fixture: ComponentFixture<PendingActiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PendingActiveComponent]
    });
    fixture = TestBed.createComponent(PendingActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
