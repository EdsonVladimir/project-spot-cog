import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {UsuarioService} from "../../Services/usuario.service";
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  public usuario = {
    par_usuario:'',
    par_contrasenia:'',
    par_correo:''
  }
  constructor(private service:UsuarioService) { }

  ngOnInit(): void {
  }
  registrar(){
    console.log(this.usuario)
    this.service.registrarUsuario(this.usuario).subscribe(
      res => {
        const respuesta = res;
        console.log(respuesta)
      }
    )
  }
}
