import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddBookComponent} from './books/add-book/add-book.component';
import {ListUserComponent} from './users/list-user/list-user.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: ListUserComponent},
  {path: 'books/new', pathMatch: 'full', component: AddBookComponent},
  {path: 'books', pathMatch: 'full', component: AddBookComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
