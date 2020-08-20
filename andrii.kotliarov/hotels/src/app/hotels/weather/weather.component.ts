import { Component, OnInit, Input } from '@angular/core';
import { IWeather } from '../models/IWeater';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  @Input()
  public weather: IWeather;

  @Input()
  public description: string;

  ngOnInit(): void {
  }

}
