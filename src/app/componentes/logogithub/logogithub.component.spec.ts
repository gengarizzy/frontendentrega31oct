import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogogithubComponent } from './logogithub.component';

describe('LogogithubComponent', () => {
  let component: LogogithubComponent;
  let fixture: ComponentFixture<LogogithubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogogithubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogogithubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
