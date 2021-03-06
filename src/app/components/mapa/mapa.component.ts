import { Component, OnInit } from '@angular/core';
import { Marcador } from '../../classes/marcador.class';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MapaEditarComponent } from './mapa-editar/mapa-editar.component';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {


  marcadores: Marcador[] = [];

  lat: number = -25.412202;
  lng: number = -57.538757;

  constructor(public snackBar: MatSnackBar, public dialog: MatDialog) {

    //const nuevoMarcador= new Marcador(-25.412202, -57.538757);

    //this.marcadores.push(nuevoMarcador);

    if (localStorage.getItem('marcadores')) {

      this.marcadores = JSON.parse(localStorage.getItem('marcadores'));

    }
  }

  ngOnInit() {
  }

  agregarMarcador(evento) {

    const coords: { lat: number, lng: number } = evento.coords;

    console.log(evento.coords.lat);

    const nuevoMarcador = new Marcador(coords.lat, coords.lng);

    this.marcadores.push(nuevoMarcador);

    this.guardarStorage();

  }

  guardarStorage() {
    localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
    this.snackBar.open('Marcador agregado', 'Cerrar', { duration: 3000 });
  }

  borrarMarcador(i: number) {

    this.marcadores.splice(i, 1);
    this.guardarStorage();
    this.snackBar.open('Marcador borrado', 'Cerrar', { duration: 3000 });

  }

  editarMarcador(marcador: Marcador) {

    const dialogRef = this.dialog.open(MapaEditarComponent, {
      width: '250px',
      data: { titulo: marcador.titulo, desc:marcador.desc}

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      if (result){
        marcador.titulo= result.titulo;
        marcador.desc= result.desc;
        this.snackBar.open('Marcador Editador', 'Cerrar',{ duration:3000 })
      } else{
        
        this.snackBar.open('Edicion Cancelada', 'Cerrar',{ duration:3000 })
      } 

      console.log(result);
    });

  }
}

