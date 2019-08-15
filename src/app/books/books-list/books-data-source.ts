import { DataSource } from '@angular/cdk/collections';
import {HttpClient} from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import {Author, Book} from '../../../types';
import {BooksService} from '../books.service';

/**
 * Data source for the ListUser view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class BooksDataSource extends DataSource<Book> {
  data: Book[];
  paginator: MatPaginator;
  sort: MatSort;

  constructor(private library: BooksService) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Book[]> {
    return this.library.getBooks();
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {
  }
}
