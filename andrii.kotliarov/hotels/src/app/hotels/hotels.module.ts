import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelsListComponent } from './hotels-list/hotels-list.component';
import { HotelComponent } from './hotel/hotel.component';
import { WeatherComponent } from './weather/weather.component';
import { ProfileComponent } from './profile/profile.component';
import { HotelsComponent } from './hotels.component';
import { HotelInfoComponent } from './hotel-info/hotel-info.component';


@NgModule({
  declarations: [
    HotelsListComponent,
    HotelComponent,
    WeatherComponent,
    ProfileComponent,
    HotelsComponent,
    HotelInfoComponent],
  imports: [
    CommonModule
  ],
  exports:[HotelsComponent]
})
export class HotelsListModule { }
