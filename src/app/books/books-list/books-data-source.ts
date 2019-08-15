import { DataSource } from '@angular/cdk/collections';
import {Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import { Book } from '../../../types';
import { BooksService } from '../books.service';

/**
 * Data source for the ListUser view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class BooksDataSource extends DataSource<Book> {
  private unsubscribe$ = new Subject();
  constructor(private library: BooksService) {
    super();
  }

  connect(): Observable<Book[]> {
    return this.library.getBooks().pipe(takeUntil(this.unsubscribe$));
  }

  disconnect() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
