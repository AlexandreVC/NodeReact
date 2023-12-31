import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LessonListPageComponent} from "./lesson-list-page/lesson-list-page.component";
import {LessonEditFormComponent} from "./lesson-edit-form/lesson-edit-form.component";
import {LessonDetailPageComponent} from "./lesson-detail-page/lesson-detail-page.component";
import {AccueilComponent} from "./accueil/accueil.component";
import {ResultatsNotesComponent} from "./resultats-notes/resultats-notes.component";
import {CalendrierComponent} from "./calendrier/calendrier.component";
import {ListeCoursComponent} from "./liste-cours/liste-cours.component";

const routes: Routes = [
  { path:'lesson-edit-form', component: LessonEditFormComponent },
  { path:'lesson-list', component: LessonListPageComponent },
  { path:'lesson/:id', component: LessonDetailPageComponent },
  { path: 'Accueil', component: AccueilComponent },
  { path: 'resultats', component: ResultatsNotesComponent },
  { path: 'calendrier', component: CalendrierComponent },
  { path: 'liste-cours', component: ListeCoursComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
