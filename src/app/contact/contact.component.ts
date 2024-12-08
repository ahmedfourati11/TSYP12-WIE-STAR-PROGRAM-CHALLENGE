import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  isChecked: boolean = false;  

  toggleSwitch(): void {
    this.isChecked = !this.isChecked;  
  }
  formData = {
    name: '',
    email: '',
    phone: '',
    category: '',
    message: ''
  };

  isModalVisible = false;

  onSubmit() {
    if (
      this.formData.name &&
      this.formData.email &&
      this.formData.phone &&
      this.formData.category &&
      this.formData.message
    ) {
      // Affiche la modale si le formulaire est valide
      this.isModalVisible = true;
    }
  }

  closeModal() {
    this.isModalVisible = false;
    this.formData = {
      name: '',
      email: '',
      phone: '',
      category: '',
      message: ''
    };
  }
}
