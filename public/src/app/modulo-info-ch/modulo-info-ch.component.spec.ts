import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloInfoChComponent } from './modulo-info-ch.component';

describe('ModuloInfoChComponent', () => {
  let component: ModuloInfoChComponent;
  let fixture: ComponentFixture<ModuloInfoChComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuloInfoChComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuloInfoChComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
