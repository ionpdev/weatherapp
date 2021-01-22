import axios from 'axios';

const APPID = '0d2ca1afb30c534cd95b7cc4f9861482'

function weatherUrl(city) {
    return `http://api.openweathermap.org/data/2.5/weather?q=${encodeURI(
        city, 
        )}&units=imperial&APPID=${APPID}`
}