import { Component, OnInit } from '@angular/core';
// añadimos el import del servicio previamente creado
import { SeleccionesService } from '../services/selecciones.service';

@Component({
  selector: 'listado-selecciones',
  templateUrl: './listado-selecciones.component.html',
  styleUrls: ['./listado-selecciones.component.css']
})
export class ListadoSeleccionesComponent implements OnInit {

  selecciones: any;
  seleccionesFiltrados: any;

  // Tambien lo añadimos al constructor
  constructor(private backend: SeleccionesService) { }

  getFiltro(id) {
    this.backend.getSeleccionFiltrado(id).subscribe(personajes => {
      this.seleccionesFiltrados = personajes;
    });
  }

  ngOnInit(): void {
    this.backend.getSelecciones().subscribe(selecciones => {
      this.selecciones = selecciones;
    });

  }

}
