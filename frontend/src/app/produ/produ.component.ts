import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup, Validators}  from '@angular/forms';

@Component({
  selector: 'app-produ',
  templateUrl: './produ.component.html',
  styleUrls: ['./produ.component.scss']
})
export class ProduComponent implements OnInit {
  formulario:any={}
  pagina:any=[]


  constructor() { }

  ngOnInit(): void {
  this.pagina=JSON.parse(localStorage.getItem('Pagina'));
  }
  FormularioP= new FormGroup({
    titulo:new FormControl('',[Validators.required]),
    descripcion:new FormControl('',[Validators.required]),
  })
  GuardarProducto(){
    this.formulario=this.FormularioP.value;
    this.formulario.img="../../assets/img/coca.jpg";
    for (let x of this.pagina) {
      if(x.nombrempresa=="pepsi"){
        x.producto.push(this.formulario);
      }
    }
    console.log(this.formulario);
    console.log(this.pagina);
    localStorage.setItem('Pagina',JSON.stringify(this.pagina));
  }

}
