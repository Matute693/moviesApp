import { Component, HostListener, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { BillboardResponse, Movie } from '../../interfaces/billboard-response.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public movies: Movie[] = []; 
  public movieSlideShow: Movie[] = []; 

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const post = ( document.documentElement.scrollTop || document.body.scrollTop ) + 1300;
    const max = ( document.documentElement.scrollHeight || document.body.scrollHeight )

    if(post > max) {
      if( this.movieService.loading ) { return }
      //TODO: call services
      this.movieService.getBillBoard().subscribe( resp => {
        this.movies.push( ...this.movies );
        console.log('calling services')
      }); 

    }

  }

  constructor( private movieService: MoviesService) { }

  ngOnInit(): void {
    this.movieService.getBillBoard()
      .subscribe( movies => {
        this.movies = movies;
        this.movieSlideShow = movies;
      } )
  }

}
