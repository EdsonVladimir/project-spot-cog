import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public items : any=[];
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Inicio',
        icon:'pi pi-fw pi-file',
        url:'#/spotify/inicio'
      },
      {
        label: 'Buscar',
        icon:'pi pi-fw pi-file',
        url:'#/spotify/buscador'
      },
      {
        label: 'Tu biblioteca',
        icon:'pi pi-fw pi-user'
      },
      {
        label: 'Crear lista',
        icon:'pi pi-fw pi-calendar',
      },
      {
        label: 'canciones que te gustan',
        icon:'pi pi-fw pi-calendar',
      }
    ]
  }

}
