import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonesSeleccionesComponent } from './botones-selecciones.component';

describe('BotonesSeleccionesComponent', () => {
  let component: BotonesSeleccionesComponent;
  let fixture: ComponentFixture<BotonesSeleccionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonesSeleccionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonesSeleccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
