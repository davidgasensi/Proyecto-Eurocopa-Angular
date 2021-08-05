import { Component, OnInit } from '@angular/core';
import { JugadoresService } from '../services/jugadores.service';

@Component({
  selector: 'alineacion',
  templateUrl: './alineacion.component.html',
  styleUrls: ['./alineacion.component.css']
})
export class AlineacionComponent implements OnInit {

  jugadores:any;
  portero = "Portero";
  defensa = "Defensa Central";
  mediocentro = "Mediocentro";
  delantero = "Delantero Centro";
  defensaFiltrado:any;
  porteroFiltrado: any;
  mediocentroFiltrado:any;
  delanteroFiltrado:any;
  showDefensas=true;
  showPorteros=true;
  showMediocentros=true;
  showDelanteros=true;
  showFiltrados=false;
  constructor(private backend:JugadoresService) { }

  ngOnInit(): void {
    this.backend.getJugadores().subscribe(jugadores=> {
      this.jugadores = jugadores;
      console.log(jugadores);
    });
  }

  getPortero(id) {
      this.backend.getDetalleJugador(id).subscribe(jugadores => {
        this.porteroFiltrado = jugadores;
        });
        this.showPorteros=false;
    }

    getDefensa(id) {
      this.backend.getDetalleJugador(id).subscribe(jugadores => {
        this.defensaFiltrado = jugadores;
        });
        this.showDefensas=false;
    }

    getMediocentro(id) {
      this.backend.getDetalleJugador(id).subscribe(jugadores => {
        this.mediocentroFiltrado = jugadores;
        });
        this.showMediocentros=false;
    }

    getDelantero(id) {
      this.backend.getDetalleJugador(id).subscribe(jugadores => {
        this.delanteroFiltrado = jugadores;
        });
        this.showDelanteros=false;
        this.showFiltrados=true;
    }
  }

