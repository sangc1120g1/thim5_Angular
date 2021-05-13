import { Component, OnInit } from '@angular/core';
import {Book} from '../../interface/Book';
import {BookServiceService} from '../../service/book-service.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  book: Book = {};
  constructor(private bookServiceService: BookServiceService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(id => {
      let idDetail = +id.get("id");
      this.bookServiceService.getBookById(idDetail).subscribe(book =>{
        this.book = book;
      })
    })
  }

  ngOnInit() {
  }

}
