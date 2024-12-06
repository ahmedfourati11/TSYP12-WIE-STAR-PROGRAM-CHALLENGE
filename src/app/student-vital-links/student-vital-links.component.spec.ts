import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentVitalLinksComponent } from './student-vital-links.component';

describe('StudentVitalLinksComponent', () => {
  let component: StudentVitalLinksComponent;
  let fixture: ComponentFixture<StudentVitalLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentVitalLinksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentVitalLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
