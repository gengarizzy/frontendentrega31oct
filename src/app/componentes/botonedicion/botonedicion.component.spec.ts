import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonedicionComponent } from './botonedicion.component';

describe('BotonedicionComponent', () => {
  let component: BotonedicionComponent;
  let fixture: ComponentFixture<BotonedicionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonedicionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonedicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
