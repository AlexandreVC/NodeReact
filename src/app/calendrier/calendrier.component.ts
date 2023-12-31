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

  // Updated properties for current month and day
  currentMonth: string = this.viewDate.toLocaleString('fr-FR', { month: 'long' });
  currentDay: string = this.viewDate.toLocaleString('fr-FR', { weekday: 'long', day: 'numeric' });


  constructor() {
    // Set initial values for currentMonth and currentDay
    this.setCurrentMonthAndDay();
  }

  setCurrentMonthAndDay(): void {
    // You can use date-fns format function or Angular date pipe in the template
    this.currentMonth = this.viewDate.toLocaleString('fr-FR', { month: 'long' });
    this.currentDay = this.viewDate.toLocaleString('fr-FR', { weekday: 'long', day: 'numeric' });
  }

  previousMonth(): void {
    this.viewDate = subMonths(this.viewDate, 1);
  }

  nextMonth(): void {
    this.viewDate = addMonths(this.viewDate, 1);
  }
}
