import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {
  @Input()  productos;
  produ:any=[];
  produs=[]
  constructor() { }

  ngOnInit(): void {
    console.log(this.productos)
    for (let x of this.productos) {
      for (let y of x.producto){
        this.produs.push(y)
      }
    }
  }

}
