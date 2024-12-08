import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdultCoursesComponent } from './adult-courses.component';

describe('AdultCoursesComponent', () => {
  let component: AdultCoursesComponent;
  let fixture: ComponentFixture<AdultCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdultCoursesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdultCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
