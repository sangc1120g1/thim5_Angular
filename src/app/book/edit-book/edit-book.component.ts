import { Component, OnInit } from '@angular/core';
import {BookServiceService} from '../../service/book-service.service';
import {ActivatedRoute} from '@angular/router';
import {Book} from '../../interface/Book';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  book: Book = {}
   id = -1;
  constructor(private bookServiceService: BookServiceService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(id => {
      this.id = +id.get("id");
      this.bookServiceService.getBookById(this.id).subscribe(book =>{
        this.book = book;
      })
    })
  }

  ngOnInit() {
  }

  editBook(editForm: NgForm) {
    this.bookServiceService.updateBook(this.id , editForm.value).subscribe(book =>{
      this.book = book;
    })
  }
}
