import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor() { }

  getTemperature(city: string): number {
   // This is a simple implementation for our test
    // In a real app, this would call a weather API
    const mockTemperatures: {[key:string]: number} = {
      'London': 20,
      'Paris': 15,
      'New York':10,
      'Tokyo': 12,
      'Sydney': 25,
      'Cape Town': 18,
      'Rio de Janeiro': 28,
      'San Francisco': 14,
      'Mexico City': 17,

    };

    return mockTemperatures[city] || 22; // Default temperature if city not found
  }
}
