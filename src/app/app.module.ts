import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListadoSeleccionesComponent } from './listado-selecciones/listado-selecciones.component';

import { HttpClientModule } from '@angular/common/http';
import { ListadoPersonajesComponent } from './listado-personajes/listado-personajes.component';
import { BotonesSeleccionesComponent } from './botones-selecciones/botones-selecciones.component';
import { GruposComponent } from './grupos/grupos.component';
import { OrderByPipe } from './order-by.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import { ListaJugadoresComponent } from './lista-jugadores/lista-jugadores.component';
import { Route, RouterModule } from '@angular/router';
import { DetalleJugadoresComponent } from './detalle-jugadores/detalle-jugadores.component';
import { IndiceComponent } from './indice/indice.component';
import { MenuComponent } from './menu/menu.component';
import { JugadorFilterPipe } from './pipes/jugador-filter.pipe';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { PiepaginaComponent } from './piepagina/piepagina.component';
import { NgpSortModule } from "ngp-sort-pipe";
import { AlineacionComponent } from './alineacion/alineacion.component';
import { JuegovalorComponent } from './juegovalor/juegovalor.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';


const APP_ROUTES: Route[] = [
  { path: 'indice', component: IndiceComponent },

  { path: 'detalle/:id', component: DetalleJugadoresComponent },

  { path: 'alineacion', component: AlineacionComponent },

  { path: 'lista', component: ListaJugadoresComponent },

  { path: 'juegovalor', component: JuegovalorComponent },

  { path: '', redirectTo: '/indice', pathMatch: 'full' },

  { path: '**', redirectTo: '/indice', pathMatch: 'full' }
];


@NgModule({
  declarations: [
    AppComponent,
    ListadoSeleccionesComponent,
    ListadoPersonajesComponent,
    BotonesSeleccionesComponent,
    GruposComponent,
    OrderByPipe,
    SortPipe,
    EstadisticasComponent,
    ScrollToTopComponent,
    ListaJugadoresComponent,
    IndiceComponent,
    MenuComponent,
    JugadorFilterPipe,
    PiepaginaComponent,
    DetalleJugadoresComponent,
    AlineacionComponent,
    JuegovalorComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    RouterModule,
    RouterModule.forRoot(APP_ROUTES, {useHash:true}),
    BrowserModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgpSortModule,
    [SweetAlert2Module.forRoot()],

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
