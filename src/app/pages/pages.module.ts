import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from '../pipes/pipes.module';
import { ComponentsModule } from '../components/components.module';
import { RatingModule } from 'ng-starrating';
//components
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';



@NgModule({
  declarations: [
    HomeComponent,
    MovieComponent,
    SearchMovieComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    PipesModule,
    RatingModule
  ]
})
export class PagesModule { }
