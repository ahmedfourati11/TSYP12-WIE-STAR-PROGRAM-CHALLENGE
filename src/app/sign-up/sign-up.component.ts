import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterModule,FormsModule,CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  firstName = '';
  lastName = '';
  email = '';
  userType: 'Student' | 'Adult' | '' = '';
  password = '';
  confirmPassword = '';
  rememberMe = false;
  showModal = false;

  constructor(private router:Router) {}

  onSubmit() {
    if (this.firstName && this.lastName && this.email && this.password && this.confirmPassword && this.userType) {
      if (this.password === this.confirmPassword) {
        this.showModal = true; 
      } else {
        alert('Passwords do not match!');
      }
    } else {
      alert('Please fill all the fields!');
    }
  }

  goToSignIn() {
    this.showModal = false; 
    this.router.navigate(['/Sign_In']);
  }
}
