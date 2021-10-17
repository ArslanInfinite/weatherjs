// initializing weather class
const weather = new Weather('New York')

//this will return a promise because getWeather is asychronous
weather.getWeather()
    .then(results => console.log(results))
    .catch(error => console.log(error))