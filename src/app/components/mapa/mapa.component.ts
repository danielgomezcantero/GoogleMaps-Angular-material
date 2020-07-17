import { Component, OnInit } from '@angular/core';
import { Marcador } from '../../classes/marcador.class';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {


  marcadores:Marcador[]=[];

  lat: number= -25.412202;
  long: number= -57.538757;

  constructor( public snackBar: MatSnackBar)  { 
    
    // const nuevoMarcador= new Marcador(-25.412202, -57.538757);
  
    // this.marcadores.push(nuevoMarcador);

    if( localStorage.getItem('marcadores')){

      this.marcadores= JSON.parse(localStorage.getItem('marcadores'));

    }
  }
  
  ngOnInit() {
  }
  
  agregarMarcador( evento ){

    const coords: { lat:number, lng:number }= evento.coords;
    
    //console.log(evento.coords.lat);
    
    const nuevoMarcador= new Marcador(coords.lat, coords.lng);
  
    this.marcadores.push(nuevoMarcador);

    this.guardarStorage();
    
  }

  guardarStorage(){
    localStorage.setItem('marcadores', JSON.stringify( this.marcadores));
    this.snackBar.open('Marcador agregado', 'Cerrar',{duration:3000 });
  }
  
  borrarMarcador( i:number ){
    
    this.marcadores.splice(i,1);
    this.guardarStorage();
    this.snackBar.open('Marcador borrado', 'Cerrar', { duration:3000 });

  }

}
