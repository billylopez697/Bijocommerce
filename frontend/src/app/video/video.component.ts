import { Component, OnInit,Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import{FormControl,FormGroup, Validators}  from '@angular/forms';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  @Input()nombreE;
  formulario:any={}
  pagina:any=[]

  constructor(private modal:NgbModal) { }

  ngOnInit(): void {
    this.pagina=JSON.parse(localStorage.getItem('Pagina'));
  }
  FormularioP= new FormGroup({
    enlace:new FormControl('',[Validators.required]),
    descripcion:new FormControl('',[Validators.required]),
  })
  GuardarVideo(){
    this.formulario=this.FormularioP.value;
    for (let x of this.pagina) {
      if(x.nombrempresa==this.nombreE){
        x.videos.push(this.formulario);
      }
    }
    console.log(this.formulario);
    console.log(this.pagina);
    this.modal.dismissAll();
    localStorage.setItem('Pagina',JSON.stringify(this.pagina));
  }
  openn(conte){
    this.modal.open(conte);
  }

}
