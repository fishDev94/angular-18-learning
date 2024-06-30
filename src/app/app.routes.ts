import { TodopageComponent } from './todopage/todopage.component';
import { Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: 'aboutus', component: AboutusComponent },
    { path: '', component: HomeComponent },
    { path: 'todo', component: TodopageComponent }
];
