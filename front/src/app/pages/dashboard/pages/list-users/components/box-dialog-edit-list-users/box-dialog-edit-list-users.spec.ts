import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaixaDialogoEditarClientesComponent } from './caixa-dialogo-editar-clientes.component';

describe('CaixaDialogoEditarClientesComponent', () => {
  let component: CaixaDialogoEditarClientesComponent;
  let fixture: ComponentFixture<CaixaDialogoEditarClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaixaDialogoEditarClientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaixaDialogoEditarClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
