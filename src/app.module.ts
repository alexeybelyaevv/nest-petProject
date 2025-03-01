import { WeatherModule } from './modules/weather/weather.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), WeatherModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
