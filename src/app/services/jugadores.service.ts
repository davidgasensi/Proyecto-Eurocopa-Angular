import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class JugadoresService {

  constructor(private http:HttpClient) { }


  getJugadores() {
    return this.http.get('https://spring-boot-eurocopa.herokuapp.com/api/jugador');
  }

  getDetalleJugador(id:number) {
    return this.http.get('https://spring-boot-eurocopa.herokuapp.com/api/jugador/'+id);
  }
}
