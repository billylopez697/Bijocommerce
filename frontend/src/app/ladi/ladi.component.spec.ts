import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LadiComponent } from './ladi.component';

describe('LadiComponent', () => {
  let component: LadiComponent;
  let fixture: ComponentFixture<LadiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LadiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LadiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
