import { Component, OnInit } from '@angular/core';

import {MessageService} from "primeng/api";
import {LoginService} from "../../Services/login.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {
  public usuario = {
    par_usuario:'',
    par_contrasenia:''
  }
  constructor(private service:LoginService,
              private messageService: MessageService,
              private router:Router) { }

  ngOnInit(): void {
  }
  iniciarCesion(){
    this.service.iniciarCesion(this.usuario).subscribe(
      res => {
        const respuesta:any = res;
        console.log(respuesta)
        this.addSingle('success', 'Exito', respuesta.mensaje)
        localStorage.setItem('token', respuesta.contenido.token);
        localStorage.setItem('usuario', JSON.stringify(respuesta.contenido.usuario));
        this.router.navigate(['spotify']);
      }, (err) =>{
        const respuesta = err;
        this.addSingle('error', 'Error', respuesta.error.mensaje)

      }
    )
  }

  addSingle(tipo:any, mensaje:any, detalle:any) {
    this.messageService.add({severity:tipo, summary:mensaje, detail:detalle});
  }
  resgitrate(){
    this.router.navigate(['registro'])
  }


}
