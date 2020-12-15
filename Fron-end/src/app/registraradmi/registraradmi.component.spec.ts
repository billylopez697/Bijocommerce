import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistraradmiComponent } from './registraradmi.component';

describe('RegistraradmiComponent', () => {
  let component: RegistraradmiComponent;
  let fixture: ComponentFixture<RegistraradmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistraradmiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistraradmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
