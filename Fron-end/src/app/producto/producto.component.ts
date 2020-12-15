import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup, Validators}  from '@angular/forms';
import { EmpresasService} from '../Servicios/empresas.service';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})




export class ProductoComponent implements OnInit {

  photoSelected: string | ArrayBuffer;
  file: File;
  FormularioP= new FormGroup({
    titulo:new FormControl('',[Validators.required]),
    descripcion:new FormControl('',[Validators.required]),
  })
  img=''
  Producto:any
  Usuario:any= JSON.parse(sessionStorage.getItem('Admi'));


  uploadedFiles: Array < File > ;
  constructor(private empresaservice:  EmpresasService) {}

  ngOnInit(): void {
  }
  mostrarproductos(){
    this.empresaservice.obtenerempresa(this.Usuario._id).subscribe(
      res=>{
        this.Producto=res;
      },error=>{
        console.log(error);
      });
     }

  }



