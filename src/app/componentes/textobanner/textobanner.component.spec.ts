import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextobannerComponent } from './textobanner.component';

describe('TextobannerComponent', () => {
  let component: TextobannerComponent;
  let fixture: ComponentFixture<TextobannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextobannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextobannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
