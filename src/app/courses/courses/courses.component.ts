import { Course } from './../model/course';
import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent {
  public courses: Course[] = [{ _id: '1', name: 'Java', category: 'back-end' }];
  displayedColumns = ['name', 'category'];

  constructor() {
    // this.courses = [];
  }
}
