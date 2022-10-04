import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  searchMovie(searchMovie: string){
    searchMovie = searchMovie.trim();
    if( searchMovie.length === 0 ) {
      return;
    }
    if(searchMovie.length >= 3){
      this.router.navigate(['/search', searchMovie])
    }
  }

}
