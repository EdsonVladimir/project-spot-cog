import { Injectable } from '@angular/core';
import {map} from "rxjs";
import {HttpHeaders, HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class CancionesService {
  private token:any = localStorage.getItem('token')
  constructor(public http:HttpClient) {

  }
  obtenerCesiones(){
    const headers = new HttpHeaders().set('token',this.token);
    return this.http.get(`${environment.urlGlobal}cancion`, {headers}).pipe(map(data=>{
      return data;
    }))
  }
}
