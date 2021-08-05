import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoSeleccionesComponent } from './listado-selecciones.component';

describe('ListadoSeleccionesComponent', () => {
  let component: ListadoSeleccionesComponent;
  let fixture: ComponentFixture<ListadoSeleccionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoSeleccionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoSeleccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
