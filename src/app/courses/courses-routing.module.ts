import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CourseFormComponent } from './course-form/course-form.component';
import { CoursesComponent } from './courses/courses.component';

const routes: Routes = [
  {
    // quando for /courses e não ouver nada depois vai renderizar o CoursesComponent (
    path: '',
    component: CoursesComponent,
  },
  {
    path: 'new',
    component: CourseFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesRoutingModule {}
