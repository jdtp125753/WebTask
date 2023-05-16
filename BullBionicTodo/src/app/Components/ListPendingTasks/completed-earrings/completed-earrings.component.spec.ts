import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedEarringsComponent } from './completed-earrings.component';

describe('CompletedEarringsComponent', () => {
  let component: CompletedEarringsComponent;
  let fixture: ComponentFixture<CompletedEarringsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompletedEarringsComponent]
    });
    fixture = TestBed.createComponent(CompletedEarringsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
