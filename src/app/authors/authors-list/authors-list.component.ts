import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import {Author} from '../../../types';
import {AuthorsService} from '../authors.service';
import { AuthorsListDataSource } from './authors-list-datasource';

@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.css']
})
export class AuthorsListComponent implements AfterViewInit, OnInit {
  @ViewChild(MatTable, {static: false}) table: MatTable<Author>;
  dataSource: AuthorsListDataSource;
  displayedColumns = ['id', 'avatar', 'name', 'email', ];

  constructor(private authors: AuthorsService) {}

  ngOnInit() {
    this.dataSource = new AuthorsListDataSource(this.authors);
  }

  ngAfterViewInit() {
    this.table.dataSource = this.dataSource;
  }
}
