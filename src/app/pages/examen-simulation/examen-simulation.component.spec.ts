import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenSimulationComponent } from './examen-simulation.component';

describe('ExamenSimulationComponent', () => {
  let component: ExamenSimulationComponent;
  let fixture: ComponentFixture<ExamenSimulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamenSimulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamenSimulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
