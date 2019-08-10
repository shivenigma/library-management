import {HttpClient} from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {Observable} from 'rxjs';
import {Author, Publication} from '../../../types';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  addBookForm = this.fb.group({
    company: null,
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    address: [null, Validators.required],
    address2: null,
    city: [null, Validators.required],
    state: [null, Validators.required],
    postalCode: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    ],
    shipping: ['free', Validators.required]
  });
  authors$: Observable<Author[]>;
  publications$: Observable<Publication[]>;

  constructor(private fb: FormBuilder,
              private http: HttpClient) {
    this.authors$ = this.http.get<Author[]>('assets/authors.json');
    this.publications$ = this.http.get<Publication[]>('assets/publications.json');
  }

  onSubmit() {
    alert('Thanks!');
  }
}
