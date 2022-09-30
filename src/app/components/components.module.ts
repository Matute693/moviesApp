import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RatingModule } from 'ng-starrating';

import { NavbarComponent } from './navbar/navbar.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { MoviesPosterGridComponent } from './movies-poster-grid/movies-poster-grid.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SlideshowComponent,
    MoviesPosterGridComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RatingModule,
  ],
  exports: [NavbarComponent, SlideshowComponent, MoviesPosterGridComponent]
})
export class ComponentsModule { }
