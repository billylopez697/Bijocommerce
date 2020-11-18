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
  CrearPagina= new FormGroup({
    ColorNav:new FormControl('',[Validators.required]),
    ColorLetra:new FormControl('',[Validators.required]),
  })


  ngOnInit(): void {
    console.log(this.CrearPagina);

  }
enviar(){
  console.log(this.CrearPagina.value);
}

}
