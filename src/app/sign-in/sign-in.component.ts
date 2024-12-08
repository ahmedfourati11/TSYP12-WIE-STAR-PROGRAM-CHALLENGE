import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [RouterModule,FormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {

  email = '';
  password = '';
  rememberMe = false;

  constructor(private router:Router) {}

  onLogin() {
    
    if (!this.email || !this.password) {
      alert('Please fill all fields!');
      return;
    }

    const firstLetter = this.password[0].toLowerCase();
    if (firstLetter === 's') {
      this.router.navigate(['/Student_Home']);
    } else if (firstLetter === 'a') {
      this.router.navigate(['/Adult_Home']);
    } else {
      alert('Invalid password.');
    }
  }

}
