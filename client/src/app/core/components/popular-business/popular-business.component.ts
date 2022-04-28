import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popular-business',
  templateUrl: './popular-business.component.html',
  styleUrls: ['./popular-business.component.scss']
})
export class PopularBusinessComponent implements OnInit {

  business = [
    {
      name: 'KFC',
      logo: 'assets/images/business/kfc-logo.png',
      img: '../../../../assets/images/business/kfc.png'
    },
    {
      name: 'PIZZA HUT',
      logo: '../../../../assets/images/business/pizza-hut-logo.png',
      img: '../../../../assets/images/business/pizza-hut.png'
    },
    {
      name: 'McDonalds',
      logo: '../../../../assets/images/business/mcdonalds-logo.png',
      img: '../../../../assets/images/business/mcdonalds.png'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
