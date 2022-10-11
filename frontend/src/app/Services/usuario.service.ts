import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(public http:HttpClient) { }

  registrarUsuario(usuario:any){
    return this.http.post('http://localhost:3000/api/usuario', usuario).pipe(map(data=>{
      return data;
    }))
  }
}
