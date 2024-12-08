import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-adult-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './adult-contact.component.html',
  styleUrl: './adult-contact.component.css'
})
export class AdultContactComponent {

  isChecked: boolean = false;  

  toggleSwitch(): void {
    this.isChecked = !this.isChecked;  
  }

}
