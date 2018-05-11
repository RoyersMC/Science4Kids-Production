import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloJuegoChComponent } from './modulo-juego-ch.component';

describe('ModuloJuegoChComponent', () => {
  let component: ModuloJuegoChComponent;
  let fixture: ComponentFixture<ModuloJuegoChComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuloJuegoChComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuloJuegoChComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
