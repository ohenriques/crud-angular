import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';
import { Course } from './../model/course';
import { CoursesService } from './../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent {
  courses$: Observable<Course[]>;
  displayedColumns = ['name', 'category', 'actions'];

  // coursesServices: CoursesService;

  constructor(
    private coursesServices: CoursesService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // this.courses = [];
    // this.coursesServices = new CoursesService();
    this.courses$ = this.coursesServices.list().pipe(
      tap({
        error: (error) => {
          this.onError('Não foi possível carregar a lista de cursos');
        },
      })
    );
  }
  // tap({
  //       error: (error) => {
  //         this.onError('Não foi possível carregar a lista de cursos');
  //       },
  //     })

  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }

  ngOnInit(): void {
    //   this.courses = this.coursesServices.list();
  }
}
