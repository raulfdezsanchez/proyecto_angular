import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CiclosDetalleComponent } from './ciclos-detalle.component';

describe('CiclosDetalleComponent', () => {
  let component: CiclosDetalleComponent;
  let fixture: ComponentFixture<CiclosDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CiclosDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CiclosDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
