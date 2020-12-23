import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NavigationComponent} from './navigation/navigation.component';
import {CoursePageComponent} from './course-page/course-page.component';
import { SigninComponent} from './auth/containers/signin/login.component';
import {AuthGuard} from './auth/guards/auth.guard';
import {ArticleComponent} from './article/article.component';
import {LoginComponent} from './login/login.component';
import {ValidationComponent} from './validation/validation.component';
import {UserComponent} from './user/user.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuard]
  },
  {path: 'main', component: NavigationComponent},
  {path: 'courses', component: CoursePageComponent},
  {path: 'sign', component: SigninComponent},
  {path: 'article', component: ArticleComponent},
  {path: 'login', component: LoginComponent},
  {path: 'validation', component: ValidationComponent},
  {path: 'user', component: UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
