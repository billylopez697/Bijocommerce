import { Component, OnInit, ViewChild } from '@angular/core';
import {EmpresasService} from '../Servicios/empresas.service';
import { Route, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import{FormControl,FormControlName,FormGroup, Validators}  from '@angular/forms';

@Component({
  selector: 'app-admi-compani',
  templateUrl: './admi-compani.component.html',
  styleUrls: ['./admi-compani.component.css']
})
export class AdmiCompaniComponent implements OnInit {
  @ViewChild ('modalvideo') modalvideo;
  elejir='';
  empresa:any= JSON.parse(sessionStorage.getItem('Admi'));
  nombre='';
  descripcion='';
  estado='';
  empresas:any={};
  imagen=''
  modal:any

  constructor(private modalService: NgbModal,private empresaservice: EmpresasService,private navegacion: Router) { }

  Formulario=new FormGroup({
    enlace:new FormControl(null, Validators.required),
    descripcion:new FormControl(null, Validators.required),

  })
  Modallogin(){
    console.log('hola')
    this.modal=this.modalService.open(this.modalvideo, {size: 'l'});
  }


  ngOnInit(): void {
    this.obtenerempresa();
  }


  ModalImgen(){
    console.log('hola')
    this.modalService.open(this.modalvideo, {size: 'l'});
  }

  perfil(){
    this.elejir='perfil'

  }
  enviar(){
    console.log(this.Formulario.value);
  }
  administar(){
    this.elejir='Administar'
  }
  obtenerempresa(){
    this.empresaservice.obtenerempresa(this.empresa._id).subscribe(
      res=>{
        console.log(res);
        this.empresas=res;
        this.nombre=this.empresas.nombre;
        this.descripcion=this.empresas.descripcion;
        this.estado=this.empresas.suspendido
        this.imagen=this.empresas.img;


      },error=>{
        console.log(error);
      });
     }

     rutas3(){
      this.navegacion.navigate(['admi-compani/GuardarProducto']);
     }
     rutas4(){
      this.navegacion.navigate(['admi-compani/GuardarImagen']);
     }

  }
