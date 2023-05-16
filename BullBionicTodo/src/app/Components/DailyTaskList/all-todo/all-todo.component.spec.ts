import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTodoComponent } from './all-todo.component';

describe('AllTodoComponent', () => {
  let component: AllTodoComponent;
  let fixture: ComponentFixture<AllTodoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllTodoComponent]
    });
    fixture = TestBed.createComponent(AllTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
