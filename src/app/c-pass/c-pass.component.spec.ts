import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CPassComponent } from './c-pass.component';

describe('CPassComponent', () => {
  let component: CPassComponent;
  let fixture: ComponentFixture<CPassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CPassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
