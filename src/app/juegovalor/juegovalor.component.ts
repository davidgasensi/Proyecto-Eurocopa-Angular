import { hostViewClassName } from '@angular/compiler';
import { Component, OnInit, ɵLifecycleHooksFeature } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JugadoresService } from '../services/jugadores.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'juegovalor',
  templateUrl: './juegovalor.component.html',
  styleUrls: ['./juegovalor.component.css']
})
export class JuegovalorComponent implements OnInit {
  random1:any;
  random2:any;
  aleatorio1:any;
  aleatorio2:any
  jugadores:any;
  showButton1=true;
  showValor=false;
  respuestaCorrecta1:any
  respuestaCorrecta2:any
  respuestaIncorrecta1:any
  respuestaIncorrecta2:any
  constructor(private backend:JugadoresService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.backend.getDetalleJugador(Math.floor(Math.random() * 189)).subscribe(jugadores=> {
      this.random2 = jugadores;
      this.random2 = this.shuffle(this.jugadores);
    });
    this.backend.getDetalleJugador(Math.floor(Math.random() * 189)).subscribe(jugadores=> {
      this.random1 = jugadores;
      this.random1 = this.shuffle(this.jugadores);
    });
  }

  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  getAleatorio1() {
    this.backend.getDetalleJugador(Math.floor(Math.random() * 189)).subscribe(jugadores => {
      this.aleatorio1 = jugadores;
      });

  }

  getAleatorio2() {
    this.backend.getDetalleJugador(Math.floor(Math.random() * 189)).subscribe(jugadores => {
      this.aleatorio2 = jugadores;
      });
      this.showButton1=false;
  }

  comprobarValor(valor1, valor2) {
    var valor1Bien1 = valor1.replace('mill','');
    var valor2Bien1 = valor2.replace('mill','');
    let valor1Bien = parseInt(valor1Bien1);
    let valor2Bien = parseInt(valor2Bien1);
    if (valor1Bien > valor2Bien) {
      Swal.fire({
        icon: 'success',
        title: '¡Acertaste!',
      })
      this.respuestaCorrecta1=true;
      this.respuestaIncorrecta2=true;
    } else if (valor1Bien == valor2Bien) {
      Swal.fire({
        icon: 'info',
        title: 'Tienen el mismo valor',
      })
    }
    else {
      Swal.fire({
        icon: 'error',
        title: '¡Fallaste!',
      })
        this.respuestaCorrecta2=true;
        this.respuestaIncorrecta1=true;
      }
      this.showValor=true;


    }

  comprobarValor2(valor1, valor2) {
    var valor1Bien1 = valor1.replace('mill','');
    var valor2Bien1 = valor2.replace('mill','');
    let valor1Bien = parseInt(valor1Bien1);
    let valor2Bien = parseInt(valor2Bien1);
    if (valor2Bien > valor1Bien) {
      Swal.fire({
        icon: 'success',
        title: '¡Acertaste!',
      })
      this.respuestaCorrecta2=true;
      this.respuestaIncorrecta1=true;
    }
    else if (valor1Bien == valor2Bien) {
      Swal.fire({
        icon: 'info',
        title: 'Tienen el mismo valor',
      })
    } else {
      Swal.fire({
        icon: 'error',
        title: '¡Fallaste!',
      })
        this.respuestaCorrecta1=true;
      this.respuestaIncorrecta2=true;
      }
      this.showValor=true;

    }

    repetir() {
      location.reload(true);
    }

  }


