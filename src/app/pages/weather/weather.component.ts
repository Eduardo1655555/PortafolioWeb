import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WeatherService } from '../../Services/weather.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [
    RouterLink,
CommonModule,
FormsModule
    // Other imports if needed
  ],
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'] // Corrected from styleUrl to styleUrls
})
export class WeatherComponent implements OnInit {

  city!: string;
  weatherData: any;


  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    // Initialization logic if needed
  }

  getWeather() {
    this.weatherService.getWeather(this.city)
      .subscribe(data => {
        this.weatherData = data;
        console.log(data);
      });
  }
}


