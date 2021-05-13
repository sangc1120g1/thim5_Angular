import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CreateBookComponent} from './book/create-book/create-book.component';
import {ListBookComponent} from './book/list-book/list-book.component';
import {DeteleBookComponent} from './book/detele-book/detele-book.component';
import {EditBookComponent} from './book/edit-book/edit-book.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BookDetailComponent} from './book/book-detail/book-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateBookComponent,
    ListBookComponent,
    DeteleBookComponent,
    EditBookComponent,
    BookDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
