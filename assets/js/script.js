// create a variable for the current date and 
var currentDate = new Date();
var currentDatePlus1 = new Date(currentDate);
currentDatePlus1 = currentDatePlus1.setDate(currentDatePlus1.getDate() + 1)
currentDatePlus1 = currentDatePlus1.toDateString();
console.log(currentDatePlus1);

function getApi(city) {

    var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=8dc431793fa117a46c92a939890cc1fc"
  
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })

      .then(function (data) {
        // Use the console to examine the response
        console.log(data);

         // change the date to a more readable string
         currentDate = currentDate.toDateString();

        // change the name of the city (and add the current date to it) in the top right container that holds current weather conditions for that city
        var cityName = $('#current-city').text(data.name + " (" + currentDate + ")");

        // find the coordinates for longitude and latitude
        var longitude = data.coord.lon;
        console.log(longitude);
  
        var latitude = data.coord.lat;
        console.log(latitude);

        // create new api url that pulls more detailed info (such as UV Index)
        var longLatUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + longitude + "&exclude=hourly,minutely&units=imperial&appid=8dc431793fa117a46c92a939890cc1fc"

        // fetch new data from newly generated api url
        fetch(longLatUrl)
            .then(function (response) {
            return response.json();
            })

            .then(function (data) {
            // Use the console to examine the response
            console.log(data);

            currentForecast(data)

            })

      })

};

function searchBar() {

    

};

$("#search-button").click(function () {

    var city = $("#search-bar").val();
    console.log(city);

    getApi(city);

});

function futureForecast (data) {

    // find the forecast card elements
        // card for 1 day out
        var dayOne = $('#day-1-date').text(currentDate.getDate() + 1);

        // card for 2 days out
        var dayTwo = $('#day2').append("<li></li>");

        // card for 3 days out
        var dayThree = $('#day3').append("<li></li>");

        // card for 4 days out
        var dayFour = $('#day4').append("<li></li>");

        // card for 5 days out
        var dayFive = $('#day5').append("<li></li>");


};

function currentForecast (data) {

    // make a new element to attach to header h2 and set the current weather icon to it
    // $('#current-city').append("<p>" + data.current.weather.icon + "</p>");

    // make a new list item to attach to unordered list and set the current Temp in Farenheit to it
    $('#current-conditions').append("<li>Temperature: " + data.current.temp + " °F</li>");

    // make a new list item to attach to unordered list and set the current Wind Speed to it
    $('#current-conditions').append("<li>Temperature: " + data.current.wind_speed + " MPH</li>");


    // make a new list item to attach to unordered list and set the current Humidity percentage to it
    $('#current-conditions').append("<li>Temperature: " + data.current.humidity + " %</li>");


    // make a new list item to attach to unordered list and set the current UV Index to it
    $('#current-conditions').append("<li>Temperature: " + data.current.uv + " °F</li>");

};

function main() {

searchBar();

futureForecast();

};

main();




// API Key = 8dc431793fa117a46c92a939890cc1fc