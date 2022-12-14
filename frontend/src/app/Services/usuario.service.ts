import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor(public http:HttpClient) { }

  registrarUsuario(usuario:any){
    return this.http.post(`${environment.urlGlobal}usuario`, usuario).pipe(map(data=>{
      return data;
    }))
  }
}
