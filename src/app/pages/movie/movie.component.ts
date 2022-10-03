import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { MovieDetails } from '../../interfaces/movie-response.interface';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  public movie?: MovieDetails

  constructor( 
      private activateRoute: ActivatedRoute,
      private movieService: MoviesService) { }

  ngOnInit(): void {
    const id: string = this.activateRoute.snapshot.params['id'];
    this.movieService.getMovieDetails(id).subscribe( movie => {
      console.log(movie)
      this.movie = movie
    })
  }

}
