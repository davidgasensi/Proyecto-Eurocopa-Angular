import { Component, OnInit } from '@angular/core';
import { SeleccionesService } from '../services/selecciones.service';

@Component({
  selector: 'botones-selecciones',
  templateUrl: './botones-selecciones.component.html',
  styleUrls: ['./botones-selecciones.component.css']
})
export class BotonesSeleccionesComponent implements OnInit {
  seleccionesFiltrados: any;
  showImage = false;
  constructor(private backend: SeleccionesService) { }

  ngOnInit(): void {

  }


  getFiltro(id) {
    this.backend.getSeleccionFiltrado(id).subscribe(selecciones => {
      this.seleccionesFiltrados = selecciones;
      });
      this.showImage = true;
  }
}
