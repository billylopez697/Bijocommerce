import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cargar-p',
  templateUrl: './cargar-p.component.html',
  styleUrls: ['./cargar-p.component.scss']
})
export class CargarPComponent implements OnInit {
  pagina:any=[{
    nombrempresa:'pepsi',
    nav:false,
    foo:true,
    descripcion:"vendemos frescos",
    producto:[{img:"../../assets/img/coca.jpg",
               descripcion:"Prueba nuestros deliciosos frescos",
               titulo:"Pepsi sub Zero"
              },
              {img:"../../assets/img/1.jpg",
              descripcion:"Prueba nuestros deliciosos frescos dos",
              titulo:"Pepsi sin Azucar"
              }
              ],
    imagen:[],
  },
  {
    nombrempresa:'coca',
    nav:true,
    foo:false,
    descripcion:"vendemos frescos mas ricos",
    producto:[{
        img:"../../assets/img/coca.jpg",
        descripcion:"Prueba nuestros deliciosos frescos",
        titulo:"COCA COLA DE CAFE"
        },
      {
        img:"../../assets/img/1.jpg",
        descripcion:"Prueba nuestros deliciosos frescos este es 2",
        titulo:"Coca De Dieta"
      }

      ],
    imagen:[]
  }
]

  constructor() { }

  ngOnInit(): void {
  }
  cargar(){
    localStorage.setItem('Pagina',JSON.stringify(this.pagina));

  }

}
