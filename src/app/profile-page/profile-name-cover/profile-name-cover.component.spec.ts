import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileNameCoverComponent } from './profile-name-cover.component';

describe('ProfileNameCoverComponent', () => {
  let component: ProfileNameCoverComponent;
  let fixture: ComponentFixture<ProfileNameCoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileNameCoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileNameCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
