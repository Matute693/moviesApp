import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { Cast } from '../../interfaces/movie-cast.interface';

@Component({
  selector: 'app-slide-cast-show',
  templateUrl: './slide-cast-show.component.html',
  styleUrls: ['./slide-cast-show.component.css']
})
export class SlideCastShowComponent implements OnInit, AfterViewInit{

  @Input() cast: Cast[] = [];
  public mySwiper: Swiper | undefined;

  constructor() { }

  ngOnInit(): void {

    console.log(this.cast)
  }

  ngAfterViewInit(): void {
    this.mySwiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      freeMode: true,
      spaceBetween: 50
    });
  }
}
