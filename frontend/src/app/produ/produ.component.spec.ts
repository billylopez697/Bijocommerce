import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduComponent } from './produ.component';

describe('ProduComponent', () => {
  let component: ProduComponent;
  let fixture: ComponentFixture<ProduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
