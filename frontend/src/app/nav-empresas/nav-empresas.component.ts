import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-nav-empresas',
  templateUrl: './nav-empresas.component.html',
  styleUrls: ['./nav-empresas.component.scss']
})
export class NavEmpresasComponent implements OnInit {
  @Input() nombreE;

  constructor() { }

  ngOnInit(): void {
  }

}
