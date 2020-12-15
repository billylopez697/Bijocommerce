import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup, Validators}  from '@angular/forms';
import { Route, Router } from '@angular/router';
import {AdministradorService} from '../Servicios/administrador.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  FormularioL= new FormGroup({
    usuario:new FormControl('',[Validators.required]),
    contrasenia:new FormControl('',[Validators.required])
  })
  usuarios:any;
  data:any={};
  mensaje='';

  constructor(private administradoorservice:AdministradorService,private navegacion: Router) { }

  ngOnInit(): void {
  }


  Loggearse(){
   this.data=this.FormularioL.value;
   console.log(this.data);
   this.administradoorservice.login(this.data).subscribe(
    res=>{
      console.log(res);
      if(res.error==true){
        this.mensaje=res.mensaje;
      }else{
        sessionStorage.setItem('Admi', JSON.stringify(res.mensaje));
        this.navegacion.navigate(['admi']);
      }
    },error=>{
      console.log(error);
    }
  );
}
}
