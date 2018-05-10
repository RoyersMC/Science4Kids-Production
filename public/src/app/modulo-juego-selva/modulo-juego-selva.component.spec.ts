import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloJuegoSelvaComponent } from './modulo-juego-selva.component';

describe('ModuloJuegoSelvaComponent', () => {
  let component: ModuloJuegoSelvaComponent;
  let fixture: ComponentFixture<ModuloJuegoSelvaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuloJuegoSelvaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuloJuegoSelvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
