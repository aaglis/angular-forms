import { Routes } from '@angular/router';
import { TemplateDrivenFormPageComponent } from './pages/template-driven-form-page/template-driven-form-page.component';
import { ReactiveFormPageComponent } from './pages/reactive-form-page/reactive-form-page.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'template-driven-form', component: TemplateDrivenFormPageComponent},
    {path: 'reactive-form', component: ReactiveFormPageComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'}
];
