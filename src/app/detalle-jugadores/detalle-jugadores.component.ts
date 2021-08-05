import { Component, OnInit } from '@angular/core';
import { JugadoresService } from '../services/jugadores.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'detalle-jugadores',
  templateUrl: './detalle-jugadores.component.html',
  styleUrls: ['./detalle-jugadores.component.css']
})
export class DetalleJugadoresComponent implements OnInit {
  id= 0;
  jugador:any;

  constructor(private backend:JugadoresService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params.id;
    this.backend.getDetalleJugador(this.id).subscribe(jugador => {
      this.jugador = jugador;
      console.log(jugador);
    });
  }

}
