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
    descripcion:"Pepsi, también conocida como Pepsi-Cola, es una gaseosa de cola originaria en los Estados Unidos y producida por la compañía PepsiCo.",
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
    img:"../../assets/img/logo de la pepsi.jpg"
  },
  {
    nombrempresa:'coca',
    nav:true,
    foo:false,
    descripcion:"Coca-Cola, conocida comúnmente como Coca en muchos países hispanohablantes (en inglés Coke), es una bebida gaseosa.",
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
    imagen:[],
    img:"../../assets/img/logo de la coca.png"
  }
]

  constructor() { }

  ngOnInit(): void {
  }
  cargar(){
    localStorage.setItem('Pagina',JSON.stringify(this.pagina));

  }

}
