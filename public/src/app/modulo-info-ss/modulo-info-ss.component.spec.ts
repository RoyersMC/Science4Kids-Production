import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloInfoSsComponent } from './modulo-info-ss.component';

describe('ModuloInfoSsComponent', () => {
  let component: ModuloInfoSsComponent;
  let fixture: ComponentFixture<ModuloInfoSsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuloInfoSsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuloInfoSsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
