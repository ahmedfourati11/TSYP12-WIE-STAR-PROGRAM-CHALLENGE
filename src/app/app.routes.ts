import { Routes } from '@angular/router';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { SignUpComponent } from './sign-up/sign-up.component';

export const routes: Routes = [
    {path:"",component:HeroSectionComponent},
    {path:"Sign_Up",component:SignUpComponent},
];
