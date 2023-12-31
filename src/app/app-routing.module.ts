import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccueilComponent} from "./accueil/accueil.component";
import {ResultatsNotesComponent} from "./resultats-notes/resultats-notes.component";
import {CalendrierComponent} from "./calendrier/calendrier.component";
import {ListeCoursComponent} from "./liste-cours/liste-cours.component";

const routes: Routes = [
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
