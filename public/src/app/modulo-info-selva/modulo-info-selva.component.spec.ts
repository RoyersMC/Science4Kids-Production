import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloInfoSelvaComponent } from './modulo-info-selva.component';

describe('ModuloInfoSelvaComponent', () => {
  let component: ModuloInfoSelvaComponent;
  let fixture: ComponentFixture<ModuloInfoSelvaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuloInfoSelvaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuloInfoSelvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
