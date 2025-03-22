import { TestBed } from '@angular/core/testing';

import { WeatherService } from './weather.service';

describe('WeatherService', () => {
  let service: WeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // TDD - Step 1: Write a failing test for our new feature
  it('should return temperature for a given city', () => {
    // Arrange - set up our test
    const city = 'London';

    // Act - call the method we're testing
    const result = service.getTemperature(city);

    // Assert - verify the result matches our expectation
    expect(result).toBeDefined();
    expect(typeof result).toBe('number');
  });
});
