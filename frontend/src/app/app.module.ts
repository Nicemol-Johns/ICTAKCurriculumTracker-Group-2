import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AuthService } from './auth.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './pages/home/navbar/navbar.component';
import { IntroComponent } from './pages/home/intro/intro.component';
import { CardsComponent } from './pages/home/cards/cards.component';
import { FooterComponent } from './pages/home/footer/footer.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AboutUsComponent } from './pages/home/about-us/about-us.component';
import { CurriculumListComponent } from './pages/curriculums/curriculum-list/curriculum-list.component';
import { CurriculumQueriesService } from './curriculum-queries.service';
import { ViewComponent } from './pages/curriculums/view/view.component';
import { EditComponent } from './pages/curriculums/edit/edit.component';
//import { SearchFilterPipe } from './search-filter.pipe';
import { RequirementformComponent } from './pages/requirementform/requirementform.component';
import { RequirementlistComponent } from './pages/requirementlist/requirementlist.component';
import { RequirementformService } from './requirementform.service';

import { FacultyDashboardComponent } from './pages/faculty-dashboard/faculty-dashboard.component';
import { FooterShortComponent } from './pages/home/footer-short/footer-short.component';
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
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ChatServiceService } from './chat-service.service';
import { SearchPipe } from './search.pipe';
import { ForgotPasswordComponent } from './pages/login/forgot-password/forgot-password.component';
import { DatePipe } from '@angular/common';
import { MyCurriculumsComponent } from './pages/faculty-dashboard/my-curriculums/my-curriculums.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IntroComponent,
    CardsComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    RformFacultyComponent,
    DashboardComponent,
    AboutUsComponent,
    CurriculumListComponent,
    ViewComponent,
    EditComponent,
    RequirementformComponent,
    RequirementlistComponent,
    FacultyDashboardComponent,
    FooterShortComponent,
    CreateCurriculumsComponent,
    FacultyDashboardComponent,
    RequirementsComponent,
    DetailsComponent,
    ReferencesComponent,
    CurriculumFetchComponent,
    CurriculumViewComponent,
    ApproveComponent,
    PendingComponent,
    PendingFacultyComponent,
    ApprovedFacultyComponent,
    SearchPipe,
    ForgotPasswordComponent,
    MyCurriculumsComponent,

    //SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SweetAlert2Module
  ],
  providers: [AuthService,CurriculumQueriesService,RequirementformService,ChatServiceService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
