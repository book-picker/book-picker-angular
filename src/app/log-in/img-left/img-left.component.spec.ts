import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgLeftComponent } from './img-left.component';

describe('ImgLeftComponent', () => {
  let component: ImgLeftComponent;
  let fixture: ComponentFixture<ImgLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
