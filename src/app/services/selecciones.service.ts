import { Injectable } from '@angular/core';
// añadimos el import
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SeleccionesService {

  // añadimos el constructor
  constructor(private http:HttpClient) { }

  getSelecciones() {
    return this.http.get('https://spring-boot-eurocopa.herokuapp.com/api/selecciones'); // y añadimos la api que queramos recoger
  }

  getSeleccionFiltrado(id) {
    let personajes = this.http.get('https://spring-boot-eurocopa.herokuapp.com/api/selecciones/'+id);
    return personajes;
  }
}
