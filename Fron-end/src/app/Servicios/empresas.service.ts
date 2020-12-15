import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  constructor(private httpClient:HttpClient) { }
  obtenerempresas():Observable<any>{
    return this.httpClient.get('http://localhost:8888/empresas',{});
  }
  Login(data:any):Observable<any>{
    return this.httpClient.post('http://localhost:8888/empresas/login',{
      nombre:data.nombre,
      contrasenia:data.contrasenia
    });
  }
  obtenerempresa(data){
    return this.httpClient.get(`http://localhost:8888/empresas/${data}`,{});
  }


}
