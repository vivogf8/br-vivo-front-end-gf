import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioRegraComponent } from './formulario-regra.component';

describe('FormularioRegraComponent', () => {
  let component: FormularioRegraComponent;
  let fixture: ComponentFixture<FormularioRegraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioRegraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioRegraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
