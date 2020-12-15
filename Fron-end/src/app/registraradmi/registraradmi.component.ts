import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup, Validators}  from '@angular/forms';
import { Route, Router } from '@angular/router';
import {AdministradorService} from '../Servicios/administrador.service';

@Component({
  selector: 'app-registraradmi',
  templateUrl: './registraradmi.component.html',
  styleUrls: ['./registraradmi.component.css']
})
export class RegistraradmiComponent implements OnInit {
  data=[]
  Formulario= new FormGroup({
    nombre:new FormControl('',[Validators.required]),
    apellido:new FormControl('',[Validators.required]),
    celular:new FormControl('',[Validators.required]),
    usuario:new FormControl('',[Validators.required]),
    contrasenia:new FormControl('',[Validators.required])
  })

  constructor(private administradoorservice:AdministradorService) { }

  ngOnInit(): void {
  }

  registrarse(){
    this.data=this.Formulario.value;
    this.administradoorservice.registarusuarios(this.data).subscribe(
      res=>{
        console.log(res);
      },error=>{
        console.log(error);
      }
    );

  }

}
