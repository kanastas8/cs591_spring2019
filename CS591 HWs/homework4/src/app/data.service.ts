import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient) { }

  private serverUrl1 = 'http://localhost:3000/users';

  getUsers() {
    return this.http.get(this.serverUrl1);
  }

  private serverUrl2 = 'http://localhost:3000/';
  getMovies() {
    return this.http.get(this.serverUrl2);
  }
}
