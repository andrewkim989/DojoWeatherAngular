import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {}

  seattle() {
    return this._http.get("http://api.openweathermap.org/data/2.5/weather?q=Seattle,wa,usa&appid=72ea2b1e50747afd827171f5a46d6b15");
  }

  sanjose() {
    return this._http.get("http://api.openweathermap.org/data/2.5/weather?q=san%20jose,ca,usa&appid=72ea2b1e50747afd827171f5a46d6b15");
  }

  burbank() {
    return this._http.get("http://api.openweathermap.org/data/2.5/weather?q=Burbank,ca,usa&appid=72ea2b1e50747afd827171f5a46d6b15");
  }

  dallas() {
    return this._http.get("http://api.openweathermap.org/data/2.5/weather?q=dallas,tx,usa&appid=72ea2b1e50747afd827171f5a46d6b15");
  }

  dc() {
    return this._http.get("http://api.openweathermap.org/data/2.5/weather?q=washington,dc,usa&appid=72ea2b1e50747afd827171f5a46d6b15");
  }

  chicago() {
    return this._http.get("http://api.openweathermap.org/data/2.5/weather?q=chicago,il,usa&appid=72ea2b1e50747afd827171f5a46d6b15");
  }
}
