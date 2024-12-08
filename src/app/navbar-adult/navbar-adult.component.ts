import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar-adult',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './navbar-adult.component.html',
  styleUrl: './navbar-adult.component.css'
})
export class NavbarAdultComponent {
  
  isMenuOpen: boolean = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
  closeMenu(): void {
    this.isMenuOpen = false;
  }
  
}
