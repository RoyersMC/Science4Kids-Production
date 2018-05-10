import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloJuegoOceanoComponent } from './modulo-juego-oceano.component';

describe('ModuloJuegoOceanoComponent', () => {
  let component: ModuloJuegoOceanoComponent;
  let fixture: ComponentFixture<ModuloJuegoOceanoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuloJuegoOceanoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuloJuegoOceanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
