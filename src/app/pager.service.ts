import { Injectable } from '@angular/core';
import * as _ from 'underscore';

@Injectable({
  providedIn: 'root'
})
export class PagerService {

  constructor() { }

  getPager(totalItems: number, currentPage: number){
    let pageSize: number = 9;
    let totalPages = Math.ceil(totalItems/pageSize);
    let startPage: number, endPage: number;

    if(totalPages < 3){
      startPage = 1;
      endPage = totalPages;
    } else{
        if(currentPage <= 2){
          startPage = 1;
          endPage = 3;
        } else if( currentPage + 1 >= totalPages){
          startPage = totalPages - 2;
          endPage = totalPages;
        } else {
          startPage = currentPage - 1;
          endPage = currentPage + 1;
        }
    }

    // let startIndex = (currentPage - 1)*pageSize;
    // let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    let pages = _.range(startPage, endPage + 1);

    return{
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      // startIndex: startIndex,
      // endIndex: endIndex,
      pages: pages
    };
  }
}
