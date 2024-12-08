import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdultCoursesForStudentsComponent } from './adult-courses-for-students.component';

describe('AdultCoursesForStudentsComponent', () => {
  let component: AdultCoursesForStudentsComponent;
  let fixture: ComponentFixture<AdultCoursesForStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdultCoursesForStudentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdultCoursesForStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
