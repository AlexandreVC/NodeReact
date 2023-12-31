import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LessonEditFormComponent } from './lesson-edit-form/lesson-edit-form.component';
import { LessonSearchPageComponent } from './lesson-search-page/lesson-search-page.component';
import { MenuNavBarComponent } from './menu-nav-bar/menu-nav-bar.component';
import { LessonListPageComponent } from './lesson-list-page/lesson-list-page.component';
import { LessonDetailPageComponent } from './lesson-detail-page/lesson-detail-page.component';
import {HttpClientModule} from "@angular/common/http";
import { ResultatsNotesComponent } from './resultats-notes/resultats-notes.component';
import { CalendrierComponent } from './calendrier/calendrier.component';
import { ListeCoursComponent } from './liste-cours/liste-cours.component';
import { AccueilComponent } from './accueil/accueil.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
@NgModule({
  declarations: [
    AppComponent,
    LessonEditFormComponent,
    LessonSearchPageComponent,
    MenuNavBarComponent,
    LessonListPageComponent,
    LessonDetailPageComponent,
    ResultatsNotesComponent,
    CalendrierComponent,
    ListeCoursComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
