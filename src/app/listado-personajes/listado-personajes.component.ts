import { Component, OnInit } from '@angular/core';
import { PersonajesService } from '../services/personajes.service';
@Component({
  selector: 'listado-personajes',
  templateUrl: './listado-personajes.component.html',
  styleUrls: ['./listado-personajes.component.css']
})
export class ListadoPersonajesComponent implements OnInit {

  personajes: any;
  personajesFiltrados: any;

  constructor(private backend: PersonajesService) { }

  getFiltro(id) {
    this.backend.getPersonajesFiltrado(id).subscribe(personajes => {
      this.personajesFiltrados = personajes;
    });
  }

  ngOnInit(): void {
    this.backend.getPersonajes().subscribe(personajes => {
      this.personajes = personajes;
    });
  }

}
