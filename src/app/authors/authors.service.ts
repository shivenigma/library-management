import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Author, Book} from '../../types';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor(private http: HttpClient) { }
  getAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>('assets/authors.json');
  }
}
