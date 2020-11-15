import { Component, OnInit ,Input} from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import{FormControl,FormGroup, Validators}  from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(private modal:NgbModal) { }
  @Input() nombreE;
  formu:any;
  pagina:any=[]
  Formulario= new FormGroup({
    titulo:new FormControl('',[Validators.required]),
    descripcion:new FormControl('',[Validators.required]),
  })

  ngOnInit(): void {
    this.pagina=JSON.parse(localStorage.getItem('Pagina'));
  }
  enviar(contenido){
    console.log("hola");
    console.log(this.Formulario.value);
    this.modal.dismissAll();
      this.formu=this.Formulario.value;
      this.formu.img="../../assets/img/coca.jpg";
      for (let x of this.pagina) {
        if(x.nombrempresa==this.nombreE){
          x.imagen.push(this.formu);
        }
      }
      console.log(this.formu);
      console.log(this.pagina);
      localStorage.setItem('Pagina',JSON.stringify(this.pagina));

  }

}
