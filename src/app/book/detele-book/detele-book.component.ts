import { Component, OnInit } from '@angular/core';
import {BookServiceService} from '../../service/book-service.service';
import {ActivatedRoute} from '@angular/router';
import {Book} from '../../interface/Book';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-detele-book',
  templateUrl: './detele-book.component.html',
  styleUrls: ['./detele-book.component.css']
})
export class DeteleBookComponent implements OnInit {

  book: Book = {}
  id = -1;

  constructor(private bookServiceService: BookServiceService, private activatedRoute: ActivatedRoute){
    this.activatedRoute.paramMap.subscribe(id => {
      this.id = +id.get("id");
      this.bookServiceService.getBookById(this.id).subscribe(book =>{
        this.book = book;
      })
    })
  };


  ngOnInit() {

  }

  deleteBook(id) {
    this.bookServiceService.delete(this.id).subscribe(book =>{
      console.log(book)
    })
  }
}
