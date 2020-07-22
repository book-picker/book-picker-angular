import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.sass']
})
export class BookInfoComponent implements OnInit {
  title = '500 Days of Summer';
  author = 'Scoot S. Weber';
  date = '1 july 2020';
  isbn = '125896478' ;
  edition = '2020' ;
  dis = 'Tom (Joseph Gordon-Levitt), greeting-card writer and hopeless romantic, is caught completely ';
  constructor() { }

  ngOnInit() {
  }

}
