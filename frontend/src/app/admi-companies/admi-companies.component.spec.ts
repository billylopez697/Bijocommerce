import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmiCompaniesComponent } from './admi-companies.component';

describe('AdmiCompaniesComponent', () => {
  let component: AdmiCompaniesComponent;
  let fixture: ComponentFixture<AdmiCompaniesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmiCompaniesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmiCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
