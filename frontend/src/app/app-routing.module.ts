import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { AppComponent } from './app.component';
import { IntroComponent } from './pages/home/intro/intro.component';
import { HomeComponent } from './pages/home/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupStatusComponent } from './pages/signup-status/signup-status.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AboutUsComponent } from './pages/home/about-us/about-us.component';
import { CurriculumListComponent } from './pages/curriculums/curriculum-list/curriculum-list.component';
import { ViewComponent } from './pages/curriculums/view/view.component';
import { EditComponent } from './pages/curriculums/edit/edit.component';
import { RequirementformComponent } from './pages/requirementform/requirementform.component';
import { RequirementlistComponent } from './pages/requirementlist/requirementlist.component';
import { FacultyDashboardComponent } from './pages/faculty-dashboard/faculty-dashboard.component';
import { RformFacultyComponent } from './pages/rform-faculty/rform-faculty.component';

import { CreateCurriculumsComponent } from './pages/create-curriculums/create-curriculums.component';
import { RequirementsComponent } from './pages/create-curriculums/components/requirements/requirements.component';
import { DetailsComponent } from './pages/create-curriculums/components/details/details.component';
import { ReferencesComponent } from './pages/create-curriculums/components/references/references.component';
import { CurriculumFetchComponent } from './pages/faculty-dashboard/curriculum-fetch/curriculum-fetch.component';
import { CurriculumViewComponent } from './pages/faculty-dashboard/curriculum-fetch/curriculum-view/curriculum-view.component';
import { ApproveComponent } from './pages/approve/approve.component';
import { PendingComponent } from './pages/pending/pending.component';
import { PendingFacultyComponent } from './pages/faculty-dashboard/pending-faculty/pending-faculty.component';
import { ApprovedFacultyComponent } from './pages/faculty-dashboard/approved-faculty/approved-faculty.component';
import { ForgotPasswordComponent } from './pages/login/forgot-password/forgot-password.component';
import { MyCurriculumsComponent } from './pages/faculty-dashboard/my-curriculums/my-curriculums.component';
import { authadminGuard } from './authadmin.guard';
import { authfacultyGuard } from './authfaculty.guard';
//import { OperationsCurriculumComponent } from './pages/curriculums/operations-curriculum/operations-curriculum.component';

//import { RequirementFormComponent } from './pages/requirement-form/requirement-form.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'signupstatus',component:SignupStatusComponent},
  //Admin Dashboard
  {path:'dashboard',canActivate:[authadminGuard], component:DashboardComponent,
   
  children:[
      {path:'requirement-list',component:RequirementlistComponent},
      { path: 'requirement-list/rform', component: RequirementformComponent },
      {path:'curriculum-list',component:CurriculumListComponent},
     // {path:'curriculum-list',component:OperationsCurriculumComponent},
      {path:'curriculum-list/view/:id',component:ViewComponent},
      {path:'curriculum-list/edit/:id',component:EditComponent},
      {path:'approve',component:ApproveComponent},
      {path:'pending',component:PendingComponent},
      { path: '', redirectTo: 'requirement-list', pathMatch: 'full' }
    ]
  },
  {path:'about-us',component:AboutUsComponent},
  {path:'forgot-password',component:ForgotPasswordComponent},
  {
    path: 'faculty-dashboard',canActivate:[authfacultyGuard], component: FacultyDashboardComponent,
    
    children: [
      { path: 'Rformfaculty', component: RformFacultyComponent },
      {
        path: 'curriculum-create', component: CreateCurriculumsComponent, children: [
          { path: 'requirements', component: RequirementsComponent },
          { path: 'details', component: DetailsComponent },
          { path: 'references', component: ReferencesComponent },
          { path: '', redirectTo: 'requirements', pathMatch: 'full' } // Set the default routing to requirements component when the create-curriculum component is loaded
        ]
      },
      { path: '', redirectTo: 'Rformfaculty', pathMatch: 'full' }, // Set the default child route for FacultyDashboardComponent
      { path: 'curriculum-fetch',component:CurriculumFetchComponent},
      {path:'my-curriculums',component:MyCurriculumsComponent},
      {path:'curriculum-fetch/curriculum-view/:id',component:CurriculumViewComponent},{path:'approve-faculty',component:ApprovedFacultyComponent},
      {path:'pending-faculty',component:PendingFacultyComponent}
      
    ]
  }
];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
