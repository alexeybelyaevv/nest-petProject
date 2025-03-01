import { Injectable } from '@nestjs/common';

@Injectable()
export class WeatherService {
  getCurrentWeather() {
    return ' 30C';
  }
}
