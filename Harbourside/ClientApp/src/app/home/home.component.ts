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
        width: '100%',
        height: '1000px',
        thumbnailsRows: 2,
        thumbnailsColumns: 4,
        imagePercent: 70,
        thumbnailsPercent: 30,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      {
        breakpoint:400,
        width: '100%',
        height: '500px',
        thumbnailsRows: 2,
        thumbnailsColumns: 4,
        imagePercent: 70,
        thumbnailsPercent: 30,
        imageAnimation: NgxGalleryAnimation.Slide
      }
    ];

    this.galleryImages = [
      {
        small: 'assets/ViewFromPatioMiddle_Small.jpg',
        medium: 'assets/ViewFromPatioMiddle_Medium.jpg',
        big: 'assets/ViewFromPatioMiddle_Large.jpg'
      },
      {
        small: 'assets/ViewWithFerry_Small.jpg',
        medium: 'assets/ViewWithFerry_Medium.jpg',
        big: 'assets/ViewWithFerry_Large.jpg'
      },
      {
        small: 'assets/HouseFrontFromRight_Small.jpg',
        medium: 'assets/HouseFrontFromRight_Medium.jpg',
        big: 'assets/HouseFrontFromRight_Large.jpg'
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
      },
      {
        small: 'assets/LivingRoomEnd.jpg',
        medium: 'assets/LivingRoomEnd.jpg',
        big: 'assets/LivingRoomEnd.jpg'
      },
      {
        small: 'assets/LivingRoomLeft.jpg',
        medium: 'assets/LivingRoomLeft.jpg',
        big: 'assets/LivingRoomLeft.jpg'
      },
      {
        small: 'assets/DiningAreaFromLivingRoom.jpg',
        medium: 'assets/DiningAreaFromLivingRoom.jpg',
        big: 'assets/DiningAreaFromLivingRoom.jpg'
      },
      {
        small: 'assets/DiningArea.jpg',
        medium: 'assets/DiningArea.jpg',
        big: 'assets/DiningArea.jpg'
      },
      {
        small: 'assets/Kitchen.jpg',
        medium: 'assets/Kitchen.jpg',
        big: 'assets/Kitchen.jpg'
      },
      {
        small: 'assets/MasterBedroom.jpg',
        medium: 'assets/MasterBedroom.jpg',
        big: 'assets/MasterBedroom.jpg'
      },
      {
        small: 'assets/MasterBedroom2.jpg',
        medium: 'assets/MasterBedroom2.jpg',
        big: 'assets/MasterBedroom2.jpg'
      },
      {
        small: 'assets/TwinRoom.jpg',
        medium: 'assets/TwinRoom.jpg',
        big: 'assets/TwinRoom.jpg'
      },
      {
        small: 'assets/TwinRoom2.jpg',
        medium: 'assets/TwinRoom2.jpg',
        big: 'assets/TwinRoom2.jpg'
      },
      {
        small: 'assets/DoubleBedroom.jpg',
        medium: 'assets/DoubleBedroom.jpg',
        big: 'assets/DoubleBedroom.jpg'
      },
      {
        small: 'assets/SingleRoom.jpg',
        medium: 'assets/SingleRoom.jpg',
        big: 'assets/SingleRoom.jpg'
      },
      {
        small: 'assets/SingleRoom2.jpg',
        medium: 'assets/SingleRoom2.jpg',
        big: 'assets/SingleRoom2.jpg'
      }
    ];
  }
}
