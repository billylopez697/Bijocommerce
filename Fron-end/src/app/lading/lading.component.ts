import { Component, OnInit } from '@angular/core';
import {EmpresasService} from '../Servicios/empresas.service';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-lading',
  templateUrl: './lading.component.html',
  styleUrls: ['./lading.component.css']
})
export class LadingComponent implements OnInit {
  empresas:any
  faCoffee = faCoffee;
  idpagina='';
  constructor(private empresaservice: EmpresasService,private navegacion: Router) { }

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
  pagina(id){
    console.log(id);
    this.idpagina=id;
    this.navegacion.navigate(['/lading',this.idpagina]);

  }

}
