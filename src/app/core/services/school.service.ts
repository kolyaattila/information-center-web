import {Injectable} from '@angular/core';
import {CommonRepositoryService} from '../shared/service/common-repository.service';
import {School} from '../../shared/models/school';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor(private repositoryService: CommonRepositoryService) {
  }

  createSchool(school: School) {
    return this.repositoryService.createSchool(school);
  }

  updateSchool(school: School) {
    return this.repositoryService.updateSchool(school);
  }

  deleteSchool(externalId: string) {
    return this.repositoryService.deleteSchool(externalId);
  }

  getAllSchools() {
    return this.repositoryService.getAllSchools();
  }

}
