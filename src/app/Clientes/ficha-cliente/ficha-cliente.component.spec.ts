import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaClienteComponent } from './ficha-cliente.component';

describe('FichaClienteComponent', () => {
  let component: FichaClienteComponent;
  let fixture: ComponentFixture<FichaClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FichaClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FichaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
