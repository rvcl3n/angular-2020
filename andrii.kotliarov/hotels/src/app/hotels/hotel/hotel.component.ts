import { Component, Input, OnInit } from '@angular/core';
import { IHotel } from '../models/IHotel';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
  @Input()
  public hotel: IHotel;

  ngOnInit(): void {
  }
}
