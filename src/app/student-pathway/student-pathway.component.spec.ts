import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPathwayComponent } from './student-pathway.component';

describe('StudentPathwayComponent', () => {
  let component: StudentPathwayComponent;
  let fixture: ComponentFixture<StudentPathwayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentPathwayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentPathwayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
