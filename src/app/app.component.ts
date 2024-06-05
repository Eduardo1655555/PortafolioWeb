
import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { NavComponent } from './pages/nav/nav.component';
import { HeaderComponent } from './pages/header/header.component';
import { CardModule } from 'primeng/card';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { Accordion } from 'primeng/accordion';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from './Services/weather.service';
import { WeatherComponent } from './pages/weather/weather.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavComponent,
    HeaderComponent,
    CardModule,
    AccordionModule,
    HttpClientModule,
    WeatherComponent,
    ButtonModule
  ],
  providers:[WeatherService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portafolioweb';
}
