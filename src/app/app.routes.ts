import { Routes } from '@angular/router';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeStudentComponent } from './home-student/home-student.component';
import { StudentCoursesComponent } from './student-courses/student-courses.component';
import { StudentExercisesComponent } from './student-exercises/student-exercises.component';
import { StudentGuidanceComponent } from './student-guidance/student-guidance.component';
import { StudentVitalLinksComponent } from './student-vital-links/student-vital-links.component';
import { StudentMangaStoriesComponent } from './student-manga-stories/student-manga-stories.component';
import { StudentContactComponent } from './student-contact/student-contact.component';
import { StudentTipsComponent } from './student-tips/student-tips.component';
import { StudentSuccessStoriesComponent } from './student-success-stories/student-success-stories.component';
import { StudentPathwayComponent } from './student-pathway/student-pathway.component';
import { StudentProblemSolvingComponent } from './student-problem-solving/student-problem-solving.component';
import { StudentQuizzesComponent } from './student-quizzes/student-quizzes.component';
import { AdultHomeComponent } from './adult-home/adult-home.component';
import { AdultCoursesComponent } from './adult-courses/adult-courses.component';
import { AdultCoursesForStudentsComponent } from './adult-courses-for-students/adult-courses-for-students.component';
import { AdultAdoptingNewTechnologiesComponent } from './adult-adopting-new-technologies/adult-adopting-new-technologies.component';
import { AdultSuccesStoriesComponent } from './adult-succes-stories/adult-succes-stories.component';
import { AdultTipsComponent } from './adult-tips/adult-tips.component';
import { AdultMangaAndStoriesComponent } from './adult-manga-and-stories/adult-manga-and-stories.component';
import { AdultVitalLinksComponent } from './adult-vital-links/adult-vital-links.component';
import { AdultContactComponent } from './adult-contact/adult-contact.component';

export const routes: Routes = [
    {path:"",component:HeroSectionComponent},
    {path:"About_Us",component:AboutUsComponent},
    {path:"Contact",component:ContactComponent},
    {path:"Sign_In",component:SignInComponent},
    {path:"Sign_Up",component:SignUpComponent},

    {path:"Student_Home",component:HomeStudentComponent},
    {path:"Student_Courses",component:StudentCoursesComponent},
    {path:"Student_Exercises",component:StudentExercisesComponent},
    {path:"Student_Problem_Solving",component:StudentProblemSolvingComponent},
    {path:"Student_Quizzes",component:StudentQuizzesComponent},
    {path:"Student_Guidance",component:StudentGuidanceComponent},
    {path:"Student_Tips",component:StudentTipsComponent},
    {path:"Student_Success_Stories",component:StudentSuccessStoriesComponent},
    {path:"Student_Pathway",component:StudentPathwayComponent},
    {path:"Student_Vital_Links",component:StudentVitalLinksComponent},
    {path:"Student_Manga_Stories",component:StudentMangaStoriesComponent},
    {path:"Student_Contact",component:StudentContactComponent},

    {path:"Adult_Home",component:AdultHomeComponent},
    {path:"Adult_Courses",component:AdultCoursesComponent},
    {path:"Adult_Courses_For_Students",component:AdultCoursesForStudentsComponent},
    {path:"Adult_Adopting_New_Technologies",component:AdultAdoptingNewTechnologiesComponent},
    {path:"Adult_Success_Stories",component:AdultSuccesStoriesComponent},
    {path:"Adult_Tips",component:AdultTipsComponent},
    {path:"Adult_Manga_And_Stories",component:AdultMangaAndStoriesComponent},
    {path:"Adult_Vital_Links",component:AdultVitalLinksComponent},
    {path:"Adult_Contact",component:AdultContactComponent},

];
