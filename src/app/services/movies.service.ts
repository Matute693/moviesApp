import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map, Observable, tap } from 'rxjs';
import { BillboardResponse, Movie } from '../interfaces/billboard-response.interface';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private urlBase : string = 'https://api.themoviedb.org/3';
  private billboardPage = 1
  public loading: boolean = false;

  constructor( private http: HttpClient) { }

  params() {
    return {
      api_key: 'e5c3eb90dc72dd6bf52aee1e875f2c7c',
      language: 'en-EN',
      page: this.billboardPage.toString()
    }
  }

  getBillBoard(): Observable<Movie[]> {
    this.loading = true;
    return this.http.get<BillboardResponse>(`${this.urlBase}/movie/now_playing`, {
      params: this.params()
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
    const params = { ...this.params(), page: 1, query: query}
    const baseUrl: string = 'https://api.themoviedb.org/3/search/movie';
    return this.http.get<BillboardResponse>(`${baseUrl}`, {
      params
    })
    .pipe(
      map( resp => resp.results)
    )
  }

  // https://api.themoviedb.org/3/search/movie?api_key=e5c3eb90dc72dd6bf52aee1e875f2c7c&language=en-US&query=batman&page=1&include_adult=false


}
