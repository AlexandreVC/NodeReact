import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultatsNotesComponent } from './resultats-notes.component';

describe('ResultatsNotesComponent', () => {
  let component: ResultatsNotesComponent;
  let fixture: ComponentFixture<ResultatsNotesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultatsNotesComponent]
    });
    fixture = TestBed.createComponent(ResultatsNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
