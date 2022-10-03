import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../interfaces/billboard-response.interface';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {

  public title: string = '';
  public movies: Movie[] = [];
  public loading: boolean = false;

  constructor( 
    private activatedRoute: ActivatedRoute,
    private movieService: MoviesService
    ) { 
    }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(  params => {
      // console.log(params['id']);
      this.loading = false;
      // TODO calling services
      this.movieService.searchMovies(params['id']).subscribe( film => {
        this.title = film[0].title;
        this.movies = film;
        this.loading = true;
      })
      // })
    })
  }

}
