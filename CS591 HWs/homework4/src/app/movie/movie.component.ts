import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor(private data: DataService) { }

  movies: object;

  ngOnInit() {
    this.getPopMovies();
  }

  getPopMovies(){
    this.dataService.getMovies().subscribe((data:string) => this.movies = data);
  }
  users$: object;
}
