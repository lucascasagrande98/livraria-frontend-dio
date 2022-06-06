import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class BooksService {
  private url = 'http://localhost:53337/api/livraria';
  httpOptions = {
    Headers: new HttpHeaders({ 'content-type': 'aplication/json' }),
  };

  constructor(private http: HttpClient) {}

  getBook() {
    return this.http.get(this.url);
  }
}
