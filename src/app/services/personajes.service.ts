import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  constructor(private http:HttpClient) { }

  getPersonajes() {
    let personajes = this.http.get('https://swapi.dev/api/people/?format=json');
    return personajes;
  }

  getPersonajesFiltrado(id) {
    let personajes = this.http.get('https://swapi.dev/api/people/'+id+'/?format=json');
    return personajes;
  }


}
