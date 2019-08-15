import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddBookComponent} from './books/add-book/add-book.component';
import {BooksListComponent} from './books/books-list/books-list.component';
import {ListUserComponent} from './users/list-user/list-user.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: ListUserComponent},
  {path: 'books/new', pathMatch: 'full', component: AddBookComponent},
  {path: 'books', pathMatch: 'full', component: BooksListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
