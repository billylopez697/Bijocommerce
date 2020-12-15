import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppclienteComponent } from './appcliente.component';

describe('AppclienteComponent', () => {
  let component: AppclienteComponent;
  let fixture: ComponentFixture<AppclienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppclienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
