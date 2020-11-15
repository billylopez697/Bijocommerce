import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrosEComponent } from './registros-e.component';

describe('RegistrosEComponent', () => {
  let component: RegistrosEComponent;
  let fixture: ComponentFixture<RegistrosEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrosEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrosEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
