import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListBookComponent} from './book/list-book/list-book.component';
import {CreateBookComponent} from './book/create-book/create-book.component';
import {DeteleBookComponent} from './book/detele-book/detele-book.component';
import {BookDetailComponent} from './book/book-detail/book-detail.component';
import {EditBookComponent} from './book/edit-book/edit-book.component';


const routes: Routes = [
  {
    path: '',
    component: ListBookComponent
  },
  {
    path: 'create',
    component: CreateBookComponent
  },
  {
    path: 'delete/:id',
    component: DeteleBookComponent
  },
  {
    path: 'edit/:id',
    component: EditBookComponent
  },
  {
    path: 'detail/:id',
    component: BookDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
