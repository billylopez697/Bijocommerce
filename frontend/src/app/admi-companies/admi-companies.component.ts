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
  edit=false;


  constructor() {
  }


  ngOnInit(): void {
  }
  editar(){
    if(this.edit==true){
      this.edit=false;

    }else{
      this.edit=true;
    }

  }


}
