import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdultVitalLinksComponent } from './adult-vital-links.component';

describe('AdultVitalLinksComponent', () => {
  let component: AdultVitalLinksComponent;
  let fixture: ComponentFixture<AdultVitalLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdultVitalLinksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdultVitalLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
