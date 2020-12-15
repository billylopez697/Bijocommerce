import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup, Validators}  from '@angular/forms';
import { Route, Router } from '@angular/router';
import {EmpresasService} from '../Servicios/empresas.service';

@Component({
  selector: 'app-loginempresas',
  templateUrl: './loginempresas.component.html',
  styleUrls: ['./loginempresas.component.css']
})
export class LoginempresasComponent implements OnInit {
  data:any={};
  mensaje='';
  FormularioL= new FormGroup({
    nombre:new FormControl('',[Validators.required]),
    contrasenia:new FormControl('',[Validators.required])
  })

  constructor(private empresaservice: EmpresasService,private navegacion: Router) { }

  ngOnInit(): void {
  }

  Loggearse(){
    this.data=this.FormularioL.value;
    console.log(this.data);
    this.empresaservice.Login(this.data).subscribe(
      res=>{
        if(res.error==true){
          this.mensaje=res.mensaje;
        }else{
          sessionStorage.setItem('Admi', JSON.stringify(res.mensaje));
          this.navegacion.navigate(['admi-compani']);
        }
      },error=>{
        console.log(error);
      });
  }
}
