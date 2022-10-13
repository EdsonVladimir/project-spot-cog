import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {UsuarioService} from "../../Services/usuario.service";
import {MessageService} from 'primeng/api';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  providers: [MessageService]
})
export class RegistroComponent implements OnInit {
  public usuario = {
    par_usuario:'',
    par_contrasenia:'',
    par_correo:''
  }
  constructor(private service:UsuarioService,
              private messageService: MessageService) { }

  ngOnInit(): void {
  }
  registrar(){
    console.log(this.usuario)
    this.service.registrarUsuario(this.usuario).subscribe(
      res => {
        const respuesta:any = res;
        this.addSingle('success', 'Exito', respuesta.mensaje);
      }, (err) =>{
        const respuesta = err;
        this.addSingle('error', 'Error', respuesta.error.mensaje);
    }
    )
  }

  addSingle(tipo:any, mensaje:any, detalle:any) {
    this.messageService.add({severity:tipo, summary:mensaje, detail:detalle});
  }

}
