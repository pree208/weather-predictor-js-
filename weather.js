class Weather {
  constructor(city, state) {
    this.apiKey = '3775d736f18539ba7c2a06f9d1738b54';
    this.city = city;
    this.state = state;
  }

  //FETCH WEATHER FROM API
  async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.apiKey}
`);

    const responseData = await response.json();

    responseData.state = this.state;
    return responseData;

  }

  //change weather location

  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }

}
