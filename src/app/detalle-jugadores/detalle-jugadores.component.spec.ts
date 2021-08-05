import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleJugadoresComponent } from './detalle-jugadores.component';

describe('DetalleJugadoresComponent', () => {
  let component: DetalleJugadoresComponent;
  let fixture: ComponentFixture<DetalleJugadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleJugadoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleJugadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
