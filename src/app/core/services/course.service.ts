import {Injectable} from '@angular/core';
import {Course} from '../../shared/models/course';
import {CourseFilter} from '../../shared/models/courseFilter';
import {CommonRepositoryService} from '../shared/service/common-repository.service';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private repositoryService: CommonRepositoryService) {
  }

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
}
