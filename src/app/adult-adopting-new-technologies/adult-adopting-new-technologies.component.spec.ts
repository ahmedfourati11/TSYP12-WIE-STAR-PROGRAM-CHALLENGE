import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdultAdoptingNewTechnologiesComponent } from './adult-adopting-new-technologies.component';

describe('AdultAdoptingNewTechnologiesComponent', () => {
  let component: AdultAdoptingNewTechnologiesComponent;
  let fixture: ComponentFixture<AdultAdoptingNewTechnologiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdultAdoptingNewTechnologiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdultAdoptingNewTechnologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
