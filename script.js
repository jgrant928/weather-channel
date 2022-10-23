var apiKey = "5ee9eea27f5be30445ae56bf25983572";
var userFormEl = document.querySelector("#user-form");
var cityNameInputEl = document.querySelector("#city-name");
var searchHistoryEl = document.querySelector("#search-history");
var currentWeatherEl = document.querySelector("#current-weather");
var weatherInfoEl = document.querySelector("#weather-info");
var cardDeckEl = document.querySelector("#card-deck");

var currentData = {};
var forecastData = {};
var searchHistory = [];

var listI = 0;

// fetch current weather info

var getCurrentWeather = function (city) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + apiKey;
    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    currentData = data;
                    displayCurrentWeather();
                    addSearchHistory(data.list[0].name);
                });
            } else {
                    alert("Error: " + response.statusText);
            }
        })
        .catch(function (error) {
            alert("Unable to connect to OpenWeather");
        });
};


// display current weather information

// call and save weather data

// add to search history

// reset elements