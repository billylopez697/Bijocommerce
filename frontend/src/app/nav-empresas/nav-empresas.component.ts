import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-nav-empresas',
  templateUrl: './nav-empresas.component.html',
  styleUrls: ['./nav-empresas.component.scss']
})
export class NavEmpresasComponent implements OnInit {
  @Input() nombreE;
  Estilos=JSON.parse(localStorage.getItem('Estilos'));
  colornav:string;
  colorletranav:string;
  fuentenav:string
  nav:any=[]




  constructor() { }

  ngOnInit(): void {
    for(let i of this.Estilos){
      if(i.nombrempresa==this.nombreE){
        console.log(i.nav);
        for(let j of i.nav){
          this.colornav=j.ColorNav;
          console.log(this.colornav);
          this.colorletranav=j.ColorLetra;
          this.fuentenav=j.Fuente;
        }
      }
    }
    console.log(this.colornav);
  }


}
