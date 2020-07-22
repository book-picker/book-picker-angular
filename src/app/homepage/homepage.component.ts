import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Book } from './book';
import { PagerService } from '../pager-service.service';
import * as _ from 'underscore';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.sass']
})
export class HomepageComponent implements OnInit {

  p = 1;
  URL = 'http://jsonplaceholder.typicode.com/photos';
  books: Book[];
  pager: any = {};
  pagedItems: any[];

  constructor(
    private http: HttpClient,
    private pagerService: PagerService
  ) { }


  ngOnInit(): void {
   this.getBooks();
 }

  async getBooks(){
    var headers = new HttpHeaders();
    headers.append('Content-Type','application/json');
    this.books = await this.http.get<Book[]> (this.URL, { headers: headers }).toPromise();
    console.log(this.books);
    this.setPage(1);
  }

  setPage(page: number){
    if(page < 1 || page > this.pager.totalPages){
      return;
    }
    console.log(this.books.length);
    this.pager = this.pagerService.getPager(this.books.length, page);
    this.pagedItems = this.books.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
}
