import { Component, OnInit,Output } from '@angular/core';
import{FormControl,FormGroup, Validators}  from '@angular/forms';



@Component({
  selector: 'app-admi-companies',
  templateUrl: './admi-companies.component.html',
  styleUrls: ['./admi-companies.component.scss']
})
export class AdmiCompaniesComponent implements OnInit {
  empresas=JSON.parse(sessionStorage.getItem('empresas'));
  nombreE=this.empresas.nombreE;



  constructor() {

  }
  Formulario= new FormGroup({
    titulo:new FormControl('',[Validators.required]),
    descripcion:new FormControl('',[Validators.required]),
  })


  ngOnInit(): void {
    console.log(this.empresas.nombreE);

  }


}
