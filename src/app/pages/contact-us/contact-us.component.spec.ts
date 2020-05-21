import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ContactUsComponent} from './contact-us.component';
import {ContactUsModule} from './contact-us.module';
import {CommonRepositoryService} from '../../core/shared/service/common-repository.service';
import {CommonRepositoryMockService} from '../../core/shared/service/common-repository.mock.service';
import {ToastrService} from 'ngx-toastr';

describe('ContactUsComponent', () => {
  let component: ContactUsComponent;
  let fixture: ComponentFixture<ContactUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [ContactUsModule],
      providers: [
        {provide: CommonRepositoryService, useValue: new CommonRepositoryMockService()},
        {provide: ToastrService, useValue: {}}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
