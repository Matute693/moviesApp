import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { MovieDetails } from '../../interfaces/movie-response.interface';
import { Location } from '@angular/common';
import { Cast } from '../../interfaces/movie-cast.interface';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  public movie?: MovieDetails | null;
  public cast: Cast[] = [];

  constructor( 
      private activateRoute: ActivatedRoute,
      private movieService: MoviesService,
      private location: Location,
      private router: Router) { }

  ngOnInit(): void {
    const id: string = this.activateRoute.snapshot.params['id'];

    combineLatest([
      this.movieService.getMovieDetails(id),
      this.movieService.getMovieCast( id )
    ]).subscribe( ([movie, cast]) => {
      if( !movie ) {
            this.router.navigateByUrl('/home');
            return;
          }
          this.movie = movie
          this.cast = cast.filter( cast => cast.profile_path !== null)
      })
    
    // this.movieService.getMovieDetails(id).subscribe( movie => {
    //   if( !movie ) {
    //     this.router.navigateByUrl('/home');
    //     return;
    //   }
    //   this.movie = movie
    // })

    // this.movieService.getMovieCast( id ).subscribe( cast => {
    //   // console.log( data )
    //   this.cast = cast.filter( cast => cast.profile_path !== null)
    // })
  }

  goBack() {
    this.location.back();
  }

}
