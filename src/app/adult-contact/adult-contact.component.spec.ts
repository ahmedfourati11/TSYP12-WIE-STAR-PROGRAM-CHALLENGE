import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdultContactComponent } from './adult-contact.component';

describe('AdultContactComponent', () => {
  let component: AdultContactComponent;
  let fixture: ComponentFixture<AdultContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdultContactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdultContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
