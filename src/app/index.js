const { Weather } = require('./Weather');
const { UI } = require('./UI');
const { Store } = require('./Store');
require('./index.css');


const store = new Store();
const {city, countryCode} = store.getLocationData();
const ui = new UI();
const weather = new Weather(city, countryCode);

async function fetchWeather() {
    let c = console.log;
     const data = await weather.getWeather();
     c(data);
     ui.render(data);
}

let saveChange = document.getElementById('w-change-btn');

saveChange.addEventListener('click', (event) => {
    const city = document.getElementById('city').value;
    const countryCode = document.getElementById('countryCode').value;
    weather.changeLocation(city, countryCode);
    store.setLocationData(city, countryCode);
    fetchWeather();
    event.preventDefault();
})

document.addEventListener('DOMContentLoaded', fetchWeather);