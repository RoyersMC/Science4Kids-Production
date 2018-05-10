import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloInfoOceanoComponent } from './modulo-info-oceano.component';

describe('ModuloInfoOceanoComponent', () => {
  let component: ModuloInfoOceanoComponent;
  let fixture: ComponentFixture<ModuloInfoOceanoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuloInfoOceanoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuloInfoOceanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
