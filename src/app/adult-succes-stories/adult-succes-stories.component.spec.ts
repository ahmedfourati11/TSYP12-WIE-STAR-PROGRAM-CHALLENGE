import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdultSuccesStoriesComponent } from './adult-succes-stories.component';

describe('AdultSuccesStoriesComponent', () => {
  let component: AdultSuccesStoriesComponent;
  let fixture: ComponentFixture<AdultSuccesStoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdultSuccesStoriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdultSuccesStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
