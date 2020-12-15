import { Component, OnInit } from '@angular/core';
import {AdministradorService} from '../Servicios/administrador.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-admi',
  templateUrl: './admi.component.html',
  styleUrls: ['./admi.component.css']
})
export class AdmiComponent implements OnInit {
 Usuario:any= JSON.parse(sessionStorage.getItem('Admi'));
 usuarioActual:any;
 nombre=''
 apellido=''
 elejir='';
 celular=''
 usuario=''

  constructor(private administradoorservice:AdministradorService,private navegacion: Router) { }

  ngOnInit(): void {
    this.UsuarioActual()

  }
  perfil(){
    this.elejir='perfil'

  }
  administar(){
    this.elejir='Administar'
  }
  UsuarioActual(){
    this.administradoorservice.obtenerusuario(this.Usuario._id).subscribe(
     res=>{
       console.log(res);
       this.usuarioActual=res;
       this.nombre=this.usuarioActual.nombre
       this.apellido=this.usuarioActual.apellido
       this.celular=this.usuarioActual.celular
       this.usuario=this.usuarioActual.usuario
     },error=>{
       console.log(error);
     });
    }
    registrar(){
      this.navegacion.navigate(['Registrarse']);
    }
    listado(){
      console.log("hola");
      this.navegacion.navigate(['listadoempresa']);
    }
}
