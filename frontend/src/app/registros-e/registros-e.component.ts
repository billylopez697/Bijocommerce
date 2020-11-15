import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup, Validators}  from '@angular/forms';


@Component({
  selector: 'app-registros-e',
  templateUrl: './registros-e.component.html',
  styleUrls: ['./registros-e.component.scss']
})
export class RegistrosEComponent implements OnInit {
  FormularioE= new FormGroup({
    NombreE:new FormControl('',[Validators.required]),
    UbicacionE:new FormControl('',[Validators.required]),
    SloganE:new FormControl('',[Validators.required]),
    DescripcionE:new FormControl('',[Validators.required]),
    contrasenia:new FormControl('',[Validators.required, Validators.minLength(6)])
  })
  

  constructor() { }

  ngOnInit(): void {
  }
  get contrasenia(){
    return this.FormularioE.get('contrasenia');
  }
  GuardarEmpresa(){
    console.log(this.FormularioE.value);
    console.log("formulario Valido", this.FormularioE.valid);
  }

}
