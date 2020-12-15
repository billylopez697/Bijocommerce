import { Component, OnInit } from '@angular/core';
import {EmpresasService} from '../Servicios/empresas.service';

@Component({
  selector: 'app-listaempresas',
  templateUrl: './listaempresas.component.html',
  styleUrls: ['./listaempresas.component.css']
})
export class ListaempresasComponent implements OnInit {
  empresas:any

  constructor(private empresaservice: EmpresasService) { }

  ngOnInit(): void {
    this.mostarempresas()
  }

  mostarempresas(){
    this.empresaservice.obtenerempresas().subscribe(
      res=>{
        console.log(res);
        this.empresas=res;
      },error=>{
        console.log(error);
      });
  }
  eliminar(id){
    console.log(id);

  }
  suspender(id){
    console.log(id);
  }



}
