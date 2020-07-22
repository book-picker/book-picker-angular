import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-genre',
  templateUrl: './select-genre.component.html',
  styleUrls: ['./select-genre.component.sass']
})
export class SelectGenreComponent implements OnInit {
  user = 'user' ;
  selected = [0, 0, 0, 0, 0, 0, 0, 0] ;
  style = [, , , , , , , , , ] ;
  styler = { border : '0.2em solid #1AD8E6' } ;
  a = 0;
  constructor() { }
  ngOnInit() {
  }

  select( a ) {
    if (this.selected[a] === 0) {
      this.selected[a] = 1;
      this.style[a] = this.styler;
    } else {
      this.selected[a] = 0;
      this.style[a] = {};
    }
  }
}
