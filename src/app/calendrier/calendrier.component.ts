import { Component } from '@angular/core';
import { CalendarView } from 'angular-calendar';
import { addMonths, subMonths } from 'date-fns';

@Component({
  selector: 'app-calendrier',
  templateUrl: './calendrier.component.html',
  styleUrls: ['./calendrier.component.css']
})
export class CalendrierComponent {
  viewDate: Date = new Date();
  events = [];
  view: CalendarView = CalendarView.Month;
  previousMonth(): void {
    this.viewDate = subMonths(this.viewDate, 1);
  }

  nextMonth(): void {
    this.viewDate = addMonths(this.viewDate, 1);
  }
}
