import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosLadingComponent } from './productos-lading.component';

describe('ProductosLadingComponent', () => {
  let component: ProductosLadingComponent;
  let fixture: ComponentFixture<ProductosLadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosLadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosLadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
