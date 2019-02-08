import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioOperadoraComponent } from './formulario-operadora.component';

describe('FormularioOperadoraComponent', () => {
  let component: FormularioOperadoraComponent;
  let fixture: ComponentFixture<FormularioOperadoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioOperadoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioOperadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
