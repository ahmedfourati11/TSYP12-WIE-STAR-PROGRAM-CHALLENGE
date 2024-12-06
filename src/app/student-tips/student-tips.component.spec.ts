import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentTipsComponent } from './student-tips.component';

describe('StudentTipsComponent', () => {
  let component: StudentTipsComponent;
  let fixture: ComponentFixture<StudentTipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentTipsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
