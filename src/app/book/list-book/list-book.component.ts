import { Component, OnInit } from '@angular/core';
import {Book} from '../../interface/Book';
import {BookServiceService} from '../../service/book-service.service';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {
  book: Book = {
  };
  books: Book[] = [];
  constructor(private bookServiceService: BookServiceService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.bookServiceService.getAllBook().subscribe(books => {
      this.books = books;
    });
  }
}
