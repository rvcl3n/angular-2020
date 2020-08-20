import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IHotel } from './../models/IHotel';
import { ICategory } from '../models/ICategory';

@Component({
  selector: 'app-hotels-list',
  templateUrl: './hotels-list.component.html',
  styleUrls: ['./hotels-list.component.css']
})
export class HotelsListComponent implements OnInit {
  @Input()
  public categories: ICategory<IHotel>[];

  @Output()
  public hotelWasSelected: EventEmitter<IHotel> = new EventEmitter<IHotel>();

  public selectedHotel: IHotel;
  public selectedCategory: ICategory<IHotel>;

  public selectTab(content: ICategory<IHotel>): void {
    this.selectedCategory = content;
  }

  public hotelPicked(hotelId: number): void {
    const hotel: IHotel = this.selectedCategory.categoryHotels.find((h: IHotel) => h.id === hotelId);
    this.setHotel(hotel);
  }

  public isSelected(content: ICategory<IHotel>): boolean {
    return content.categoryName === this.selectedCategory.categoryName;
  }

  public ngOnInit(): void {
    this.selectedCategory = this.categories[0];
    this.setHotel(this.selectedCategory.categoryHotels[0]);
  }

  private setHotel(hotel: IHotel): void {
    this.selectedHotel = hotel;
    this.hotelWasSelected.emit(this.selectedHotel);
  }
}