import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})

export class HomeComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  ngOnInit(): void {

    this.galleryOptions = [
      {
        width: '600px',
        height: '400px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20,
        lazyLoading:false
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = [
      {
        small: 'assets/ViewFromPatioMiddle_Small.jpg',
        medium: 'assets/ViewFromPatioMiddle_Medium.jpg',
        big: 'assets/ViewFromPatioMiddle_Large.jpg'
      },
      {
        small: 'assets/HouseFront_Small.jpg',
        medium: 'assets/HouseFront_Medium.jpg',
        big: 'assets/HouseFront_Large.jpg'
      },
      {
        small: 'assets/HouseArial_Small.jpg',
        medium: 'assets/HouseArial_Medium.jpg',
        big: 'assets/HouseArial_Large.jpg'
      }
    ];
  }
}
