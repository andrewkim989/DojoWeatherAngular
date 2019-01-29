import { Component, OnInit } from '@angular/core';
import { HttpService } from ".././http.service";

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getWeather();
  }

  weather: any;
  temp: any;
  high: any;
  low: any;

  getWeather() {
    let seattle = this._httpService.seattle();
    seattle.subscribe(data => {
      this.weather = data;
      this.temp = ((9/5) * (this.weather.main.temp - 273.15) + 32).toFixed(2);
      this.high = ((9/5) * (this.weather.main.temp_max - 273.15) + 32).toFixed(2);
      this.low = ((9/5) * (this.weather.main.temp_min - 273.15) + 32).toFixed(2);
    });
  }
}
