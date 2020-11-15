import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavEmpresasComponent } from './nav-empresas.component';

describe('NavEmpresasComponent', () => {
  let component: NavEmpresasComponent;
  let fixture: ComponentFixture<NavEmpresasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavEmpresasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
