import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogolinkedinComponent } from './logolinkedin.component';

describe('LogolinkedinComponent', () => {
  let component: LogolinkedinComponent;
  let fixture: ComponentFixture<LogolinkedinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogolinkedinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogolinkedinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
