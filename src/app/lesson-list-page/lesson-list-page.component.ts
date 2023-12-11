import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserSettingsService} from "../user-settings.service";
import {LearningPackage} from "../lesson-detail-page/lesson-detail-page.component";
import {HttpClient} from "@angular/common/http";
@Component({
  selector: 'app-lesson-list-page',
  templateUrl: './lesson-list-page.component.html'
})
export class LessonListPageComponent implements OnInit, OnDestroy {
  constructor(private userSettingsService: UserSettingsService, private httpClient: HttpClient) {
    console.log("get lastLessonId:", userSettingsService.lastLessonId);

    console.log("LessonListPageComponent.constructor()");
  }

  ngOnInit(): void {
    console.log("LessonListPageComponent.ngOnInit()");
  }

  ngOnDestroy(): void {
    console.log("LessonListPageComponent.ngOnDestroy()");
  }

  onClickTest() {
    this.httpClient.get<LearningPackage[]>('/api/learning-package/').subscribe(result => {
      console.log(result);
    })
  }
}
