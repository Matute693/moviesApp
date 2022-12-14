import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { catchError, map, Observable, of, tap } from 'rxjs';
import { BillboardResponse, Movie } from '../interfaces/billboard-response.interface';
import { MovieDetails } from '../interfaces/movie-response.interface';
import { Cast, MovieCast } from '../interfaces/movie-cast.interface';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private urlBase : string = 'https://api.themoviedb.org/3';
  private billboardPage = 1
  public loading: boolean = false;

  constructor( private http: HttpClient) { }

  get params() {
    return {
      api_key: 'e5c3eb90dc72dd6bf52aee1e875f2c7c',
      language: 'en-EN',
      page: this.billboardPage.toString()
    }
  }

  getBillboardPage() {
    this.billboardPage = 1;
  }

  getBillBoard(): Observable<Movie[]> {
    this.loading = true;
    return this.http.get<BillboardResponse>(`${this.urlBase}/movie/now_playing`, {
      params: this.params
    })
    .pipe(
      map(( resp ) => resp.results),
      tap( () => {
        this.billboardPage++;
        this.loading = false;
      })
    )
  }
  searchMovies( query: string): Observable<Movie[]> {
    const params = { ...this.params, page: 1, query: query}
    const baseUrl: string = 'https://api.themoviedb.org/3/search/movie';
    return this.http.get<BillboardResponse>(`${baseUrl}`, {
      params
    })
    .pipe(
      map( resp => resp.results)
    )
  }

  // https://api.themoviedb.org/3/search/movie?api_key=e5c3eb90dc72dd6bf52aee1e875f2c7c&language=en-US&query=batman&page=1&include_adult=false


  getMovieDetails(id: string): Observable<MovieDetails | null> {
    return this.http.get<MovieDetails>(`${ this.urlBase }/movie/${ id }`, {
      params: this.params
    }).pipe(
      // catch del error cuando el usuario modifica la ruta manual
      catchError( err => of(null) )
    )
  }

  getMovieCast( id: string ): Observable<Cast[]> {
    return this.http.get<MovieCast>(`${ this.urlBase }/movie/${ id }/credits`, {
      params: this.params
    })
    .pipe(
      map( resp => resp.cast),
      catchError( err => of([]) )
    )
  }

// /movie/{movie_id}/credits
}
