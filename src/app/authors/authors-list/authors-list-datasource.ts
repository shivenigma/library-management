import { DataSource } from '@angular/cdk/collections';
import {Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {Author} from '../../../types';
import {AuthorsService} from '../authors.service';

export class AuthorsListDataSource extends DataSource<Author> {
  private unsubscribe$ = new Subject();

  constructor(private library: AuthorsService) {
    super();
  }

  connect(): Observable<Author[]> {
    return this.library.getAuthors().pipe(takeUntil(this.unsubscribe$));
  }

  disconnect() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
