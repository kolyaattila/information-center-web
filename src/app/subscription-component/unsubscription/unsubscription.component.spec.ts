import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {UnsubscriptionComponent} from './unsubscription.component';
import {CommonRepositoryService} from '../../core/shared/service/common-repository.service';
import {CommonRepositoryMockService} from '../../core/shared/service/common-repository.mock.service';
import {ToastrService} from 'ngx-toastr';

describe('UnsubscriptionComponent', () => {
  let component: UnsubscriptionComponent;
  let fixture: ComponentFixture<UnsubscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [UnsubscriptionComponent],
      providers: [
        {provide: CommonRepositoryService, useValue: new CommonRepositoryMockService()},
        {
          provide: ToastrService, useValue: {
            success() {
            }
          }
        }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnsubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
