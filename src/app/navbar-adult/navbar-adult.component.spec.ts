import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarAdultComponent } from './navbar-adult.component';

describe('NavbarAdultComponent', () => {
  let component: NavbarAdultComponent;
  let fixture: ComponentFixture<NavbarAdultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarAdultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavbarAdultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
