import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from './book';
import { PagerService } from '../pager.service';
// import * as _ from 'underscore';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.sass']
})
export class HomepageComponent implements OnInit {
  count: number;
  totalBooks: number;
  skip: Number = 0;
  p: Number = 1;
  URL = "https://2979dd62c721.ngrok.io/getBook";
  displayBooks: Book[];
  books: Book[];
  received: Book[];
  pager: any = {};
  map = new Map<Number, Book[]>();

  constructor(
    private http: HttpClient,
    private pagerService: PagerService
  ) { }
c
  ngOnInit(): void {
    this.setPage(1);
  }
  trackItem(index : number, item : Book){
    return item.isbn;
  }


  setPage(page: number) {
    this.skip = page;
    if (!this.map.has(page)) {
      var headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json');
      console.log(JSON.stringify(this.skip))
      this.http.post(this.URL, JSON.stringify({skip : this.skip}), { headers: headers }).subscribe(
        Response => {
          console.log(Response)
          let res = JSON.parse(JSON.stringify(Response));
          console.log(res.books)
          this.displayBooks = res.books;
          this.count = res.count;
        }
      )
      this.map.set(page,this.displayBooks);
    } else{
      this.displayBooks = this.map.get(page);
    }

    if (page < 1 || page > this.pager.totalPages) {
      return;
    }

    this.pager = this.pagerService.getPager(this.count, page);
    //this.pagedItems = books.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

}
