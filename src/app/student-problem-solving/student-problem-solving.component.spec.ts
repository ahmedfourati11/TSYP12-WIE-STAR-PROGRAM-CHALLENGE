import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentProblemSolvingComponent } from './student-problem-solving.component';

describe('StudentProblemSolvingComponent', () => {
  let component: StudentProblemSolvingComponent;
  let fixture: ComponentFixture<StudentProblemSolvingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentProblemSolvingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentProblemSolvingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
