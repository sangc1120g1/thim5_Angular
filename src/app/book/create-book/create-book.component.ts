import { Component, OnInit } from '@angular/core';
import {Book} from '../../interface/Book';
import {BookServiceService} from '../../service/book-service.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
  book: Book = {};

  constructor(private bookServiceService: BookServiceService) { }

  ngOnInit() {

  }
  createBook(createForm: NgForm) {
   this.bookServiceService.createBook(createForm.value).subscribe(() => {
     console.log(createForm.value);
     this.book = {};
   });
  }

}
