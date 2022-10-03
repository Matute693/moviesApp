import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RatingModule } from 'ng-starrating';
import { PipesModule } from '../pipes/pipes.module';

import { NavbarComponent } from './navbar/navbar.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { MoviesPosterGridComponent } from './movies-poster-grid/movies-poster-grid.component';
import { LoadingComponent } from './loading/loading.component';
import { SlideCastShowComponent } from './slide-cast-show/slide-cast-show.component';

const components = [NavbarComponent, SlideshowComponent, MoviesPosterGridComponent, LoadingComponent, SlideCastShowComponent]

@NgModule({
  declarations: [
    components,
    SlideCastShowComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RatingModule,
    PipesModule
  ],
  exports: [components]
})
export class ComponentsModule { }
