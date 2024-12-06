import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSuccessStoriesComponent } from './student-success-stories.component';

describe('StudentSuccessStoriesComponent', () => {
  let component: StudentSuccessStoriesComponent;
  let fixture: ComponentFixture<StudentSuccessStoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentSuccessStoriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentSuccessStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
