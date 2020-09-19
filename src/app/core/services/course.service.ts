import {Injectable} from '@angular/core';
import {Course} from '../../shared/models/course';
import {CourseFilter} from '../../shared/models/courseFilter';
import {CommonRepositoryService} from '../shared/service/common-repository.service';
import {Observable, of} from 'rxjs';
import {switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private repositoryService: CommonRepositoryService) {
  }

  private bestCoursesObservableCache: Observable<Course[]>;
  private bestCoursesCache: Course[] = [];

  createCourse(course: Course) {
    return this.repositoryService.createCourse(course);
  }

  updateCourse(course: Course) {
    return this.repositoryService.updateCourse(course);
  }

  deleteCourse(externalId: string) {
    return this.repositoryService.deleteCourse(externalId);
  }

  courseFilter(courseFilter: CourseFilter) {
    return this.repositoryService.courseFilter(courseFilter);
  }

  getCourseById(externalId: string) {
    return this.repositoryService.getCourseById(externalId);
  }

  getAllActiveCourses() {
    return this.repositoryService.getAllActiveCourses();
  }

  getAllCourse() {
    return this.repositoryService.getAllCourses();
  }

  getBestCourses(): Observable<Course[]> {
    if (this.bestCoursesCache.length > 0) {
      return of<Course[]>(this.bestCoursesCache);
    } else if (this.bestCoursesObservableCache) {
      return this.bestCoursesObservableCache;
    } else {
      this.bestCoursesObservableCache = this.getBestCoursesFromBackend();
    }
    return this.bestCoursesObservableCache;
  }

  getBestCoursesFromBackend() {
    return this.repositoryService.getBestCourses().pipe(
      switchMap(response => {
          this.bestCoursesCache = response;
          return of<Course[]>(response);
        }
      )
    );
  }
}
