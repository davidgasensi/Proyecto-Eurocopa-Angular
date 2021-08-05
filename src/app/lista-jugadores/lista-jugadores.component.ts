import { Component, OnInit } from '@angular/core';
import { JugadoresService } from '../services/jugadores.service';
@Component({
  selector: 'lista-jugadores',
  templateUrl: './lista-jugadores.component.html',
  styleUrls: ['./lista-jugadores.component.css']
})
export class ListaJugadoresComponent implements OnInit {
  filterSearch = '';
  jugadores:any;
  searchedKeyword: string;
  constructor(private backend:JugadoresService) { }

  ngOnInit(): void {
    this.backend.getJugadores().subscribe(jugadores=> {
      this.jugadores = jugadores;
      console.log(jugadores);
    });
  }

}
