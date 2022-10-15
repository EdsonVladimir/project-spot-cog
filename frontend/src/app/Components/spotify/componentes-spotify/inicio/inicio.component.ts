import { Component, OnInit } from '@angular/core';
import {CancionesService} from "../../../../Services/canciones.service";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  public canciones:any = [];
  constructor( private service:CancionesService) { }

  ngOnInit(): void {
    this.service.obtenerCesiones().subscribe(
      res=>{
           let respuesta:any = res;
           this.canciones = respuesta.contenido;

      }
    )
  }

}
