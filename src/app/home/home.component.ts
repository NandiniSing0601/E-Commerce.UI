import { Component, Input, OnInit } from '@angular/core';
import { SuggestedProduct } from '../models/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  suggestedProducts : SuggestedProduct[] = [
    {
      bannerImage:"../../assets/Images/Baner/Baner_Mobile.png",
      category:{
        id:0,
        category:'electronics',
        subCategory:'mobiles'
      }
    },
    {
      bannerImage:"../../assets/Images/Baner/Baner_Laptop.png",
      category:{
        id:1,
        category:'electronics',
        subCategory:'laptops'
      }
    },
    {
      bannerImage:"../../assets/Images/Baner/Baner_Chair.png",
      category:{
        id:1,
        category:'furniture',
        subCategory:'chairs'
      }
    },

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
