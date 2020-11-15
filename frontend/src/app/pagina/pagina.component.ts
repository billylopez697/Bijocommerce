import { Component, OnInit,Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.scss']
})
export class PaginaComponent implements OnInit {
  names:string=this.route.snapshot.paramMap.get('id');
  navi:boolean;
  foo:boolean;
  productoss:any=[];
  img:any=[];
  pagina:any=JSON.parse(localStorage.getItem('Pagina'));


  constructor(private route: ActivatedRoute) {
    console.log(this.route.snapshot.paramMap.get('id'));

  }

  ngOnInit(): void {
    console.log(this.pagina);
    for (let x of this.pagina) {
      if(x.nombrempresa==this.names){
        this.navi=x.nav;
        this.foo=x.foo;
        this.productoss.push(x);
        this.img.push(x);
      }else{
        this.navi=false;
      }
    }
    console.log("esto es de pagina");
    console.log(this.productoss);
  }

}
