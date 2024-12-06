import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentMangaStoriesComponent } from './student-manga-stories.component';

describe('StudentMangaStoriesComponent', () => {
  let component: StudentMangaStoriesComponent;
  let fixture: ComponentFixture<StudentMangaStoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentMangaStoriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentMangaStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
