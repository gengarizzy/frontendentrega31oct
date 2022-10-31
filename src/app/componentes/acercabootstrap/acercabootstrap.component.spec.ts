import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercabootstrapComponent } from './acercabootstrap.component';

describe('AcercabootstrapComponent', () => {
  let component: AcercabootstrapComponent;
  let fixture: ComponentFixture<AcercabootstrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcercabootstrapComponent ]
    })
    .compileComponents();
  });

 beforeEach(() => {
    fixture = TestBed.createComponent(AcercabootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
