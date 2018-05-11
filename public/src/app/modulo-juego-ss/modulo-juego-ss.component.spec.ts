import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloJuegoSsComponent } from './modulo-juego-ss.component';

describe('ModuloJuegoSsComponent', () => {
  let component: ModuloJuegoSsComponent;
  let fixture: ComponentFixture<ModuloJuegoSsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuloJuegoSsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuloJuegoSsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
