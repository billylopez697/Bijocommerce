import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormunavComponent } from './formunav.component';

describe('FormunavComponent', () => {
  let component: FormunavComponent;
  let fixture: ComponentFixture<FormunavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormunavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormunavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
