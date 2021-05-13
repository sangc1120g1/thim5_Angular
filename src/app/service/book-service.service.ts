import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Book} from '../interface/Book';
import {HttpClient} from '@angular/common/http';

const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor(private http: HttpClient) { }

  getAllBook(): Observable<Book[]> {
    return this.http.get<Book[]>(`${API_URL}/books`);
  }

  createBook(book: Book): Observable<Book> {
    return this.http.post<Book>(`${API_URL}/books` , book);
  }

  updateBook(id: number , book: Book): Observable<Book> {
    return this.http.put<Book>(`${API_URL}/books/${id}` , book);
  }

  delete(id: number): Observable<Book> {
    return this.http.delete<Book>(`${API_URL}/books/${id}`);
  }

  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(`${API_URL}/books/${id}`);
  }
}
