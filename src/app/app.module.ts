import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { ArchivementsComponent } from './archivements/archivements.component';
import { LanguajeComponent } from './languaje/languaje.component';
import { InterestsComponent } from './interests/interests.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WorkExperienceComponent,
    EducationComponent,
    SkillsComponent,
    ArchivementsComponent,
    LanguajeComponent,
    InterestsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
