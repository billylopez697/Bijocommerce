import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

  constructor(private httpClient:HttpClient) { }
  obtenerusuarios():Observable<any>{
    return this.httpClient.get('http://localhost:8888/administracion',{});
  }

  registarusuarios(data:any):Observable<any>{
    return this.httpClient.post('http://localhost:8888/administracion',{
      nombre: data.nombre,
      apellido: data.apellido,
      celular: data.celular,
      contrasenia: data.contrasenia,
      usuario: data.usuario
      });
  }
  obtenerusuario(data){
    return this.httpClient.get(`http://localhost:8888/administracion/${data}`,{});
  }
  login(data:any):Observable<any>{
    return this.httpClient.post('http://localhost:8888/login',{
      contrasenia: data.contrasenia,
      usuario: data.usuario
    });
  }
}
