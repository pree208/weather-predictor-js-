class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.pressure = document.getElementById('w-dewpoint');
    this.wind = document.getElementById('w-wind');
  }

  paint(weather) {
    this.location.textContent = `${weather.name},${weather.state}`;
    this.desc.textContent = weather.weather[0].description;
    this.string.textContent = `temp: ${weather.main.temp} `;
    this.icon.setAttribute('src', `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);
    this.humidity.textContent = `Relative humidity : ${weather.main.humidity} %`;
    this.feelsLike.textContent = `Feels like : ${weather.main.feels_like} F`;
    this.pressure.textContent = `Pressure : ${weather.main.pressure} pa`;
    this.wind.textContent = `Wind : ${weather.wind.speed} m/s `;
  }
}

