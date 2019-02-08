import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioSerieComponent } from './formulario-serie.component';

describe('FormularioSerieComponent', () => {
  let component: FormularioSerieComponent;
  let fixture: ComponentFixture<FormularioSerieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioSerieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioSerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
