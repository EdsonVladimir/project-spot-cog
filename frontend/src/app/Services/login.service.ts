import { Injectable } from '@angular/core';
import {map} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(public http:HttpClient) { }
  iniciarCesion(usuario:any){
    return this.http.post(`${environment.urlGlobal}login`, usuario).pipe(map(data=>{
      return data;
    }))
  }
}
