import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdultTipsComponent } from './adult-tips.component';

describe('AdultTipsComponent', () => {
  let component: AdultTipsComponent;
  let fixture: ComponentFixture<AdultTipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdultTipsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdultTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
