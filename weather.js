// getting the api key from the api itself, then setting the attributes that the Weather class will have
class Weather{
    constructor(city, state){
        this.apiKey = '2d6ed8e7c47bf7c66104975f06f96f79'
        this.city = city 
        this.state = state 
    }

    // fetching weather information from API using an async function 
    async getWeather(){
        const response = await fetch(`api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}.json`)
        const responseData = await response.json()

        return responseData
    }

    // changing weather location

    changeLocation(city){
        this.city = city 
    }
}
