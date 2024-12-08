import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { NavbarStudentComponent } from './navbar-student/navbar-student.component';
import { NavbarAdultComponent } from './navbar-adult/navbar-adult.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FooterComponent,NavbarComponent,NavbarAdultComponent,NavbarStudentComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Star_Program_Challenge';

  constructor(private router:Router) {}

  shouldShowDefaultNavbar(): boolean {
    const paths = ['/','/About_Us','/Contact','/Sign_In','/Sign_Up'];
    return paths.includes(this.router.url);
  }

  shouldShowStudentNavbar(): boolean {
    const paths = ['/Student_Home','/Student_Courses','/Student_Exercises','/Student_Problem_Solving','/Student_Quizzes','/Student_Guidance','/Student_Tips','/Student_Success_Stories','/Student_Pathway','/Student_Vital_Links','/Student_Manga_Stories','/Student_Contact'];
    return paths.includes(this.router.url);
  }

  shouldShowAdultNavbar(): boolean {
    const paths = ['/Adult_Home','/Adult_Courses','/Adult_Courses_For_Students','/Adult_Adopting_New_Technologies','/Adult_Success_Stories','/Adult_Tips','/Adult_Manga_And_Stories','/Adult_Vital_Links','/Adult_Contact'];
    return paths.includes(this.router.url);
  }
}
