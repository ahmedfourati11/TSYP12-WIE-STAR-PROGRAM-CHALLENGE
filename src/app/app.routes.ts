import { Routes } from '@angular/router';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { SignInComponent } from './sign-in/sign-in.component';

export const routes: Routes = [
    {path:"",component:HeroSectionComponent},
    {path:"About_Us",component:AboutUsComponent},
    {path:"Contact",component:ContactComponent},
    {path:"Sign_In",component:SignInComponent},
    {path:"Sign_Up",component:SignUpComponent},
];
