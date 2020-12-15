import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EmpresasService} from '../Servicios/empresas.service';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {
  names:string=this.route.snapshot.paramMap.get('id');
  empresa:any

  constructor(private route: ActivatedRoute,private empresaservice: EmpresasService) { }

  ngOnInit(): void {
    console.log(this.names);
    this.mostarempresas();
  }

  mostarempresas(){
    console.log(this.names);
    this.empresaservice.obtenerempresa (this.names).subscribe(
      res=>{
        console.log(res);
        this.empresa=res;
      },error=>{
        console.log(error);
      });
  }


}
