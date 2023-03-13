import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';

const routes: Routes = [
  {
    // quando for /courses e não ouver nada depois vai renderizar o CoursesComponent (
    path: '',component: CoursesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
