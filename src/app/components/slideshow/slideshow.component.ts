import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/billboard-response.interface';
// import Swiper core and required modules
import { Swiper } from 'swiper';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit, AfterViewInit {

  @Input() movies?: Movie[];
  public mySwiper: Swiper | undefined;

  constructor() { }
  ngAfterViewInit(): void {
    this.mySwiper = new Swiper('.swiper', {
      loop: true,
    });
  }

  ngOnInit(): void {
    console.log(this.movies)
  }

  // event click, swiper arrow bottom 
  onSlidePrev() {
    this.mySwiper?.slidePrev()
  }

  // event click, swiper arrow next
  onSlideNext(){
    this.mySwiper?.slideNext()
    // console.log('next');
  }
  
}
