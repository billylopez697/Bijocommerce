import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginempresasComponent } from './loginempresas.component';

describe('LoginempresasComponent', () => {
  let component: LoginempresasComponent;
  let fixture: ComponentFixture<LoginempresasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginempresasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginempresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
