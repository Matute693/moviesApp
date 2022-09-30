import { Component } from '@angular/core';
import { MoviesService } from './services/movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor( private moviesServies: MoviesService) {
    this.moviesServies.getBillBoard()
      .subscribe( (resp) => {
      } )
  }
}
