import { CoursesService } from './../services/courses.service';
import { Course } from './../model/course';
import { Component } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent {
  courses$: Observable<Course[]>;
  displayedColumns = ['name', 'category'];

  // coursesServices: CoursesService;

  constructor(
    private coursesServices: CoursesService,
    public dialog: MatDialog
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

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }

  ngOnInit(): void {
    //   this.courses = this.coursesServices.list();
  }
}
