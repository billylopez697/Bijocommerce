import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-navadministrador',
  templateUrl: './navadministrador.component.html',
  styleUrls: ['./navadministrador.component.css']
})
export class NavadministradorComponent implements OnInit {

  constructor(private navegacion: Router) { }

  ngOnInit(): void {
  }
  irRutas() {
    console.log("elimina la session");
  }
  irRutas1() {
    this.navegacion.navigate(['admi']);
  }
  irRutas2() {
    this.navegacion.navigate(['lading']);
  }

}
