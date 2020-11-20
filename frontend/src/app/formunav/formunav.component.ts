import { Component, OnInit ,Input} from '@angular/core';
import{FormControl,FormGroup, Validators}  from '@angular/forms';


@Component({
  selector: 'app-formunav',
  templateUrl: './formunav.component.html',
  styleUrls: ['./formunav.component.scss']
})
export class FormunavComponent implements OnInit {
  @Input()nombreE;
  nav=false;
  footer=false;
  CrearPagina= new FormGroup({
    ColorNav:new FormControl('',[Validators.required]),
    ColorLetranav:new FormControl('',[Validators.required]),
    fuentenav:new FormControl('',[Validators.required]),
    Colorfoo:new FormControl('',[Validators.required]),
    ColorLetrafoo:new FormControl('',[Validators.required]),
    fuentefoo:new FormControl('',[Validators.required]),

  })
    Estilos:any;


  constructor() { }

  ngOnInit(): void {
    this.Estilos=JSON.parse(localStorage.getItem('Estilos'));
  }
  cambiar(value:string){
    if(value=='si'){
      this.nav=true;
    }else{
      this.nav=false;
    }
  }
  cambiar2(value:string){
    if(value=='si'){
      this.footer=true;
    }else{
      this.footer=false;
    }
  }
  get ColorNav(){
    return this.CrearPagina.get('ColorNav');
  }

  enviar(){
    console.log(this.CrearPagina.value);
   if(this.nav==true){
     for(let Estilo of this.Estilos){
       if(Estilo.nombrempresa==this.nombreE){
        Estilo.nav=[{'ColorNav':this.CrearPagina.controls['ColorNav'].value,
                      'ColorLetra': this.CrearPagina.controls['ColorLetranav'].value,
                        'Fuente':this.CrearPagina.controls['fuentenav'].value}];
        localStorage.setItem('Estilos',JSON.stringify(this.Estilos));
       }
     }
   }
   if(this.footer==true){
    for(let Estilo of this.Estilos){
      if(Estilo.nombrempresa==this.nombreE){
       Estilo.footer=[{'ColorNav':this.CrearPagina.controls['Colorfoo'].value,
                     'ColorLetra': this.CrearPagina.controls['ColorLetrafoo'].value,
                       'Fuente':this.CrearPagina.controls['fuentefoo'].value}];
       localStorage.setItem('Estilos',JSON.stringify(this.Estilos));
      }
    }

   }
  }
}
