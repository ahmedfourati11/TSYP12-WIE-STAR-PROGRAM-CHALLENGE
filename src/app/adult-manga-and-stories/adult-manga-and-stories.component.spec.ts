import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdultMangaAndStoriesComponent } from './adult-manga-and-stories.component';

describe('AdultMangaAndStoriesComponent', () => {
  let component: AdultMangaAndStoriesComponent;
  let fixture: ComponentFixture<AdultMangaAndStoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdultMangaAndStoriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdultMangaAndStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
