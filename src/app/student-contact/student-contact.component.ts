import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-student-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-contact.component.html',
  styleUrl: './student-contact.component.css'
})
export class StudentContactComponent {
  isChecked: boolean = false;  

  toggleSwitch(): void {
    this.isChecked = !this.isChecked;  
  }
}
