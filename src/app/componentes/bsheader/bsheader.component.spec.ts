import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsheaderComponent } from './bsheader.component';

describe('BsheaderComponent', () => {
  let component: BsheaderComponent;
  let fixture: ComponentFixture<BsheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BsheaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BsheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
