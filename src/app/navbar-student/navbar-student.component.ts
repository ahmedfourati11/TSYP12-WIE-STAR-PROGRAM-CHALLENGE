import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar-student',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './navbar-student.component.html',
  styleUrl: './navbar-student.component.css'
})
export class NavbarStudentComponent {

  isMenuOpen: boolean = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
  closeMenu(): void {
    this.isMenuOpen = false;
  }

}
