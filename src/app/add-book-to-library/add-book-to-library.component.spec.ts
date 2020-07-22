import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBookToLibraryComponent } from './add-book-to-library.component';

describe('AddBookToLibraryComponent', () => {
  let component: AddBookToLibraryComponent;
  let fixture: ComponentFixture<AddBookToLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBookToLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBookToLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
