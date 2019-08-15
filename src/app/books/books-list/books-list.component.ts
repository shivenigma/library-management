import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import {Book} from '../../../types';
import {BooksService} from '../books.service';
import { BooksDataSource } from './books-data-source';

@Component({
  selector: 'app-list-user',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements AfterViewInit, OnInit {
  @ViewChild(MatTable, {static: false}) table: MatTable<Book>;
  dataSource: BooksDataSource;

  displayedColumns = ['id', 'title', 'author', 'publication', 'firstRelease', 'latestRelease'];
  constructor(private booksService: BooksService) {}
  ngOnInit() {
    this.dataSource = new BooksDataSource(this.booksService);
  }

  ngAfterViewInit() {
    this.table.dataSource = this.dataSource;
  }
}
