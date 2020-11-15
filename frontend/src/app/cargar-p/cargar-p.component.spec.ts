import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargarPComponent } from './cargar-p.component';

describe('CargarPComponent', () => {
  let component: CargarPComponent;
  let fixture: ComponentFixture<CargarPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargarPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargarPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
