import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  private url = 'http://localhost:3000/hw4';

  getListMovies() {
    return this.http.get(this.url);
  }
}
