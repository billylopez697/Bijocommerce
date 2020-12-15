import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UploadServiceService {

  constructor(private http: HttpClient,private httpClient:HttpClient) { }

  uploadImage(forms:any,file:File ,id:string):Observable<any>{
    const form=new FormData();
    form.append('name',forms.name);
    form.append('file',file,'form-data');
    form.append('producto',forms.producto);
    form.append('producto',forms.producto);
    form.append('urlimg',forms.urlimg);
    form.append('precio',forms.precio);
    form.append('cantidad',forms.cantidad);
    return this.http.post<Object>(`http://localhost:8888/empresas/upload/${id}`,form);
  }
  uploadImages(forms:any,file:File ,id:string):Observable<any>{
    const form=new FormData();
    form.append('name',forms.name);
    form.append('file',file,'form-data');
    form.append('descripcion',forms.descripcion);
    return this.http.post<Object>(`http://localhost:8888/empresas/img/${id}`,form);
  }

}


