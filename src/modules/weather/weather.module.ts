import { WeatherService } from './weather.service';
import { Module } from '@nestjs/common';
import { WeatherController } from './weather.controller';

@Module({
  controllers: [WeatherController],
  imports: [],
  providers: [WeatherService],
})
export class WeatherModule {}
