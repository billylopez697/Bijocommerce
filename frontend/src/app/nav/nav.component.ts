import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private navegacion: Router) { }

  ngOnInit(): void {
  }
  irRutas() {
    this.navegacion.navigate(['login']);
  }
  irRutas1() {
    this.navegacion.navigate(['registro']);
  }

}
