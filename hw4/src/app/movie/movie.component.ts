import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  private movies: string;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies(){
    this.movieService.getListMovies().subscribe((data:string) => this.movies = data['movie']);
  }

}
