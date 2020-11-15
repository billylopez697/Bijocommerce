import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup, Validators}  from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  empresas:any=[
    {nombreE:"pepsi",
    contra:"123asd",
    SloganE:"Refresca Tu Mundo",
    Ubicacion:"Choluteca"},
    {nombreE:"coca",
    contra:"asd123",
    SloganE:"Refresca Tu Mundo",
    Ubicacion:"Mexico"
    }
  ]
  empresa:any={}
  FormularioL= new FormGroup({
    NombreE:new FormControl('',[Validators.required]),
    contrasenia:new FormControl('',[Validators.required])
  })


  constructor(private navegacion: Router) { }

  ngOnInit(): void {
  }

  Loggearse(){
    this.empresa=this.FormularioL.value;
    console.log(this.empresa);
    for (let x of this.empresas) {
      console.log(x.nombreE);
      if(x.nombreE==this.empresa.NombreE){
        if(x.contra==this.empresa.contrasenia){
          this.navegacion.navigate(['admi-compani']);
          sessionStorage.setItem('empresas',JSON.stringify(x));
        }
      }
    }
  }
}
