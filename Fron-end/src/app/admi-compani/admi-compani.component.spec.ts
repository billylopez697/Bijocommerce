import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmiCompaniComponent } from './admi-compani.component';

describe('AdmiCompaniComponent', () => {
  let component: AdmiCompaniComponent;
  let fixture: ComponentFixture<AdmiCompaniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmiCompaniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmiCompaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
