import { Routes } from '@angular/router';


import { AboutComponent } from '../app/containers/about/about.component';
import { HomeComponent } from '../app/containers/home/home.component';

const routes: Routes = [
 { path: '', component: HomeComponent },  
 { path: 'about', component: AboutComponent }

];

export const Routings = routes;
