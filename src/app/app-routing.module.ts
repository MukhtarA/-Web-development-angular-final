import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NavigationComponent} from './navigation/navigation.component';
import {CoursePageComponent} from './course-page/course-page.component';
import {LoginComponent} from './auth/containers/login/login.component';
import {AuthGuard} from './auth/guards/auth.guard';
import {ArticleComponent} from './article/article.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuard]
  },
  {path: 'main', component: NavigationComponent},
  {path: 'courses', component: CoursePageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'article', component: ArticleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
