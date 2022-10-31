import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducacionrowComponent } from './educacionrow.component';

describe('EducacionrowComponent', () => {
  let component: EducacionrowComponent;
  let fixture: ComponentFixture<EducacionrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducacionrowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducacionrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
