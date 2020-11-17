import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos-lading',
  templateUrl: './productos-lading.component.html',
  styleUrls: ['./productos-lading.component.scss']
})
export class ProductosLadingComponent implements OnInit {

  Pagina:any=JSON.parse(localStorage.getItem('Pagina'));
  constructor() { }

  ngOnInit(): void {
    console.log(this.Pagina);
    for (let x of this.Pagina) {
      console.log(x.nombrempresa);
    }
  }


}
