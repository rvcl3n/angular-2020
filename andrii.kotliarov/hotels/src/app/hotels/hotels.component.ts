import { Component, OnInit } from '@angular/core';
import { IHotel } from './models/IHotel';
import { ICategory } from './models/ICategory';
import { contentCategories } from './__mock__/categories';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
  public selectedHotel: IHotel;
  public hotelsCategory: ICategory<IHotel>[];

  public constructor() {
    this.hotelsCategory = contentCategories;
  }

  ngOnInit(): void {
  }

  public hotelWasSelected(hotel: IHotel): void {
    this.selectedHotel = hotel;
  }

}
